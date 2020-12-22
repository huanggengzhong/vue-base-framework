/*
 * @Description: 
 * @Date: 2020-12-22 13:24:55
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-12-22 14:11:01
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons', false, /\.svg$/)
requireAll(req)
