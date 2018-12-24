import Vue from 'vue'
import Router from 'vue-router'

const System = () => import('@/view/system/index')
const Login = () => import('@/view/login/login')
const Register = () => import('@/view/login/register')
const Meeting = () => import('@/view/meeting/index')
const MeetingManagement = () => import('@/view/meeting/meetingManagement/index')
const Device = () => import('@/view/device/index')
const DeviceManagement = () => import('@/view/device/deviceManagement/index')
const Users = () => import('@/view/users/index')
const UsersManagement = () => import('@/view/users/usersManagement/index')
const Upload = () => import('@/view/upload/index')


// const System = () => import(/* webpackChunkName: "group-system" */ '@/view/system/index')
// const Login = () => import(/* webpackChunkName: "group-login" */ '@/view/login/login')
// const Register = () => import(/* webpackChunkName: "group-login" */ '@/view/login/register')
// const Meeting = () => import(/* webpackChunkName: "group-meeting" */ '@/view/meeting/index')
// const MeetingManagement = () => import(/* webpackChunkName: "group-meeting" */ '@/view/meeting/meetingManagement/index')
// const Device = () => import(/* webpackChunkName: "group-device" */ '@/view/device/index')
// const DeviceManagement = () => import(/* webpackChunkName: "group-device" */ '@/view/device/deviceManagement/index')
// const Users = () => import(/* webpackChunkName: "group-users" */ '@/view/users/index')
// const UsersManagement = () => import(/* webpackChunkName: "group-users" */ '@/view/users/usersManagement/index')

// import Login from '@/view/login/login'
// import Register from '@/view/login/register'
// import System from '@/view/system/index'
// import Meeting from '@/view/meeting/index'
// import MeetingManagement from '@/view/meeting/meetingManagement/index'
// import Device from '@/view/device/index'
// import DeviceManagement from '@/view/device/deviceManagement/index'
// import Users from '@/view/users/index'
// import UsersManagement from '@/view/users/usersManagement/index'


// const System = resolve => require(['@/view/system/index'], resolve)
// const Login = resolve => require(['@/view/login/login'], resolve)
// const Register = resolve => require(['@/view/login/register'], resolve)
// const Meeting = resolve => require(['@/view/meeting/index'], resolve)
// const MeetingManagement = resolve => require(['@/view/meeting/meetingManagement/index'], resolve)
// const Device = resolve => require(['@/view/device/index'], resolve)
// const DeviceManagement = resolve => require(['@/view/device/deviceManagement/index'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },    
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component: Meeting
    },
    {
      path: '/meetingManagement',
      name: 'MeetingManagement',
      component: MeetingManagement
    },
    {
      path: '/device',
      name: 'Device',
      component: Device
    },
    {
      path: '/deviceManagement',
      name: 'DeviceManagement',
      component: DeviceManagement
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/usersManagement',
      name: 'UsersManagement',
      component: UsersManagement
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }                        
  ]
})
