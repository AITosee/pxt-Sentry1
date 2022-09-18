
> 在 [https://uniquemf.github.io/px-sentry1/](https://uniquemf.github.io/px-sentry1/) 打开此页面

## 用作扩展

此仓库可以作为 **插件** 添加到 MakeCode 中。

* 打开 [https://makecode.microbit.org/](https://makecode.microbit.org/)
* 点击 **新项目**
* 点击齿轮图标菜单下的 **扩展**
* 搜索 **https://github.com/uniquemf/px-sentry1** 并导入

## 编辑此项目 ![构建状态标志](https://github.com/uniquemf/px-sentry1/workflows/MakeCode/badge.svg)

在 MakeCode 中编辑此仓库。

* 打开 [https://makecode.microbit.org/](https://makecode.microbit.org/)
* 点击 **导入**，然后点击 **导入 URL**
* 粘贴 **https://github.com/uniquemf/px-sentry1** 并点击导入

## 使用方法

* Get Vision result

```blocks
// Initialized Sentry with I2C port
let index = 0
let target_num = 0
Sentry1.Begin(sentry1_mode_e.kI2CMode, sentry1_addr_e.ADDR1)
basic.showIcon(IconNames.Heart)
Sentry1.VisionSetStatus(Sentry1Status.Enable, sentry1_vision_e.kVisionCard)
basic.showIcon(IconNames.No)
Sentry1.LedSetColor(sentry1_led_color_e.kLedRed, sentry1_led_color_e.kLedCyan, 1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    target_num = Sentry1.Detected(sentry1_vision_e.kVisionCard)
    serial.writeValue("target_num", target_num)
    index = 1
    for (let index2 = 0; index2 < target_num; index2++) {
        serial.writeValue("index", index)
        serial.writeValue("x", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kXValue, index))
        serial.writeValue("y", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kYValue, index))
        serial.writeValue("w", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kWidthValue, index))
        serial.writeValue("h", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kWidthValue, index))
        serial.writeValue("l", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kLabel, index))
        index += 1
    }
})

```
#### 元数据（用于搜索、渲染）

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
