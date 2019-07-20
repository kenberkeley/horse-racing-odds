import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import notify from './notify'

/**
 * @param  {object} req - https://github.com/axios/axios#request-config
 * @return {Promise<any>}
 */
export default function ajax (req) {
  Nprogress.start()
  return axios(req)
    /** {object} res - https://github.com/axios/axios#response-schema */
    .then(res => {
      Nprogress.done()
      return res.data
    })
    /** {object} err - https://github.com/axios/axios#handling-errors */
    .catch(err => {
      const res = err.response
      if (res) {
        notify(`[${res.status}] ${res.statusText}`)
      } else {
        notify(err.message)
      }
      Nprogress.done(true)
      throw err
    })
}
