// 分两层数据

const privice = [
  '湖南', // 假设id=0
  '江西', // 1
  '湖北',
  '内蒙古'
]
const city = [
  ['长沙', '岳麓', '岳阳', '浏阳'], // 对应0
  ['南昌', '吉安', '岳阳', '浏阳'],
  ['武汉', '岳麓', '岳阳', '浏阳'],
  ['呼伦贝尔', 'AA', 'BB', '浏阳']
]
// 在实际开发过程种，省的数据是 {name:'湖南'，id:123}再通过id去后台拿数据，获取其下面的城市 嗯 他
export default {
  privice,
  city
}