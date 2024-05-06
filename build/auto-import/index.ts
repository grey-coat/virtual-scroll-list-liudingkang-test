export default function resolvers(componentName: string) {
  console.log(componentName)
  // if (componentName.substring(0, 1).toLowerCase() !== "w") {
  //   return;
  // }
  if (componentName.toLowerCase() !== 'fixedsizelist') {
    return
  }
  const map = new Map([
    ['FixedSizeList', 'virtual-scroll-list-liudingkang/es/packages/fixed-size-list']
  ])
  //下划线风格转为驼峰
  const name = componentName.replace(/-(\w)/g, (m, m1) => m1.toUpperCase())
  if (map.has(name)) {
    const from = map.get(name)
    if (from)
      return {
        from,
        name: 'default' /*components/button.vue默认以default方式导出*/
      }
  }
  return
}
