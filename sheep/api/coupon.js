import request from '@/sheep/request';

export default {
  // ζηζΌε’
  list: (params) =>
    request({
      url: 'coupon',
      method: 'GET',
      params,
      custom: {
        showLoading: false,
      },
    }),
  userCoupon: (params) =>
    request({
      url: 'user/coupon',
      method: 'GET',
      params,
    }),
  detail: (id, user_coupon_id) =>
    request({
      url: 'coupon/' + id,
      method: 'GET',
      params: {
        user_coupon_id,
      },
    }),
  get: (id) =>
    request({
      url: 'coupon/get/' + id,
      method: 'POST',
    }),
  listByGoods: (id) =>
    request({
      url: 'coupon/listByGoods/' + id,
      method: 'GET',
    }),
};
