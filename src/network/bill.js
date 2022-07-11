import request from "./request"

export function getBill(data){
  return request({
    url:"flight",
    method:"post",
    data
  })
}