import Vue from 'vue'
import * as filters from '~/filters/index'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))