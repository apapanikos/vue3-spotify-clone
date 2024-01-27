import { reactive, toRefs } from 'vue'
import type { IAxiosOptions, IAxiosState } from '.'
import type { AxiosError, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios'
import axios from 'axios'
import { debounce, throttle } from 'lodash'

const state = reactive<IAxiosState>({
  response: null,
  data: undefined,
  finished: false,
  canceled: false,
  error: null
})

const request = (url: string, config?: AxiosRequestConfig, options?: IAxiosOptions) => {
  axios(url, config)
    .then((r: AxiosResponse) => {
      state.response = r
      state.data = r.data
      state.finished = true
    })
    .catch((e: AxiosError) => {
      state.error = e
      state.finished = true
    })
}

const useAxios = (url: string, config?: AxiosRequestConfig, options?: IAxiosOptions) => {
  // handle cancel request
  const cancelToken: CancelTokenSource = axios.CancelToken.source()
  const cancel = (message?: string) => {
    cancelToken.cancel(message)
    state.canceled = true
  }

  let axiosConfig: AxiosRequestConfig = {
    ...config,
    cancelToken: cancelToken.token
  }

  let refetch
  if (options && options.debounce && options.debounce > 0) {
    refetch = debounce(() => request(url, axiosConfig, options), options.debounce)
  } else if (options && options.throttle && options.throttle > 0) {
    refetch = throttle(() => request(url, axiosConfig, options), options.throttle)
  } else {
    refetch = () => request(url, axiosConfig, options)
  }

  refetch()

  return {
    ...toRefs(state),
    refetch,
    cancel
  }
}

export { useAxios }
