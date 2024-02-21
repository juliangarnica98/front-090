export default defineNuxtRouteMiddleware((to, from) => {
    const token = useTokenStore();
    const auth = useAuthStore();
    if (token.getStatus && auth.user['rol'] == 'Admin') {
      return navigateTo('/admin/users')
    }
    if (token.getStatus && auth.user['rol'] == 'Boss') {
      return navigateTo('/boss')
    }
    if (token.getStatus && auth.user['rol'] == 'Generalist') {
      return navigateTo('/generalist/users')
    }
  })