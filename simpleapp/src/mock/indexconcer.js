var Mock = require('mockjs');
module.exports = () => {
    var data = Mock.mock({
        'show|7': [{
            'img': '/01.jpg',
            'text': "聚橙制作|百老汇爱情音乐轻松",
        }],
        'singsongs|7': [{
            'img': '/01.jpg',
            'money': '￥50',
            'text': "聚橙制作|百老汇爱情音乐轻松",
        }],
        'exhibition|7': [{
            'img': '/01.jpg',
            'text': "聚橙制作|百老汇爱情音乐轻松",
        }],
        'child|7': [{
            'img': '/01.jpg',
            'text': "聚橙制作|百老汇爱情音乐轻松",
        }],
        'singsongstop': [{
            'date': '2020.12.13',
            'week': '周日',
            'time': '19：30',
            'text': "【档期调整】聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文档期",
            'city': '上海',
            'theatername': '人民大舞台',
            'img': '/01.jpg',
        }],
        'exhibitiontop': [{
            'date': '2021.06.20',
            'week': '周日',
            'time': '17：00',
            'text': "（展览延期）【小橙堡】国家地理经典影像大展-- 北京站",
            'city': '北京',
            'theatername': '中华世纪坛',
            'img': '/01.jpg',
        }],
    })
    return data
}
// console.log(data);

