export const experiences = [
  { period: '2021.06 — 2026.05', company: 'Alibaba / 高德地图', role: '高级研发工程师', label: '01', summary: '共享出行 · 营销平台', detail: '负责玩法平台的开发与迭代，参与营销领域拆分、规则引擎建设及高可用体系演进。主导领券、集卡、裂变等玩法，服务千万级订单增长目标。', tags: ['DDD', '规则引擎', '多机房高可用'] },
  { period: '2019.08 — 2021.06', company: '滴滴出行', role: '高级研发工程师', label: '02', summary: '创新公交 · 交易系统', detail: '参与微循环、枢纽等动态公交交易类业务迭代，负责乘客端及 MIS 系统开发，深入实践限流、熔断与空间索引技术。', tags: ['微服务', 'GeoHash', '空间索引'] },
  { period: '2016.03 — 2019.08', company: '美菜网', role: '软件开发工程师', label: '03', summary: '商城 · 交易平台', detail: '深耕购物车、结算、订单、支付、拆单与售后等核心链路，参与订单中心微服务拆分、分库和复杂交易流程重构。', tags: ['交易域', '分库分表', '订单中心'] },
  { period: '2014.07 — 2016.03', company: '应用汇', role: '软件开发工程师', label: '04', summary: '支付系统 · Android SDK', detail: '参与短信代付 Android SDK、PHP 服务端与红包系统开发，建立了对客户端、服务端及版本工程的完整理解。', tags: ['支付系统', 'PHP', 'Android SDK'] },
]

export const capabilities = [
  { index: '01', title: '分布式系统', text: '在复杂业务中构建稳定、可演进的系统边界，处理高并发与数据一致性。' },
  { index: '02', title: '领域建模', text: '以 DDD 拆解混乱业务，将规则与行为沉淀为可复用的业务组件。' },
  { index: '03', title: '稳定性治理', text: '从限流熔断到多机房、监控与灰度发布，让系统在增长中保持韧性。' },
  { index: '04', title: '技术攻坚', text: '快速定位复杂链路问题，用清晰方案推动跨团队协作与平稳交付。' },
]

export const technologies = ['Go', 'Microservices', 'DDD', 'Rules Engine', 'Sentinel', 'RocketMQ', 'Redis', 'MySQL', 'TDDL', 'High Concurrency']
