import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosKey, type IAxiosOptions } from '.'
import { injectStrict } from '@/shared/utils/injectTyped'
import { ref, shallowRef } from 'vue'

// TODO - add support for debounce and throttle
// TODO - add support for abort controller

export const useHttpClient = <T, E = unknown, H = unknown>(
  instance: AxiosInstance = injectStrict(AxiosKey)
) => {
  const isLoading = ref(false)
  const hasFailed = ref(false)
  const isFinished = ref(false)
  const status = ref<number>()
  const statusText = ref<string>()
  const response = shallowRef<AxiosResponse<T>>()
  const data = shallowRef<T>()
  const error = shallowRef<AxiosError<E>>()
  const headers = ref<H>()

  function reset() {
    response.value = undefined
    data.value = undefined
    error.value = undefined
    status.value = 0
    statusText.value = undefined
    isLoading.value = true
    hasFailed.value = false
    isFinished.value = false
  }

  function map(res: AxiosResponse) {
    status.value = res.status as number
    statusText.value = res.statusText as string
    data.value = res.data
    headers.value = res.headers as any
  }

  async function request(config: AxiosRequestConfig): Promise<void> {
    reset()

    try {
      response.value = await instance.request<T>({
        ...config
      })
      map(response.value)
    } catch (_error) {
      error.value = _error as AxiosError<E>
      hasFailed.value = true
    } finally {
      isLoading.value = false
      isFinished.value = true
    }
  }

  function requestByType(
    url: string,
    config: AxiosRequestConfig,
    method: string,
    data?: T
  ): Promise<void> {
    return request({ ...config, method, url, ...(data && { data }) })
  }

  return {
    isLoading,
    hasFailed,
    isFinished,
    status,
    statusText,
    response,
    data,
    error,
    headers,
    request,
    get: (url: string, config: AxiosRequestConfig) => requestByType(url, config, 'GET'),
    post: (url: string, data: T, config: AxiosRequestConfig) =>
      requestByType(url, config, 'POST', data),
    put: (url: string, data: T, config: AxiosRequestConfig) =>
      requestByType(url, config, 'PUT', data),
    patch: (url: string, data: T, config: AxiosRequestConfig) =>
      requestByType(url, config, 'PATCH', data),
    delete: (url: string, config: AxiosRequestConfig) => requestByType(url, config, 'DELETE')
  }
}
