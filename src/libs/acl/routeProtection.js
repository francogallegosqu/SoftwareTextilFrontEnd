export const canNavigate = (to, modules, roleName) => to.matched.some(route => {
  if (to.meta.permittedRoles) {
    return (modules.includes(route.meta.module) && to.meta.permittedRoles.includes(roleName))
  }
  return true
})

export const canNavigateTo = to => {
  if (to.name !== 'web') {
    return true
  }
  return false
}
export const _ = undefined
