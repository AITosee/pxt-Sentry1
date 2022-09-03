declare const enum sentry_vision_e {
    //% block="Color"
    kVisionColor = 1,
    //% block="Blob"
    kVisionBlob = 2,
    //% block="Ball"
    kVisionBall = 3,
    //% block="Line"
    kVisionLine = 4,
    //% block="Card"
    kVisionCard = 6,
    //% block="Body"
    kVisionBody= 7,
    //% blockHidden=true
    kVisionMaxType
}

declare const enum sentry_mode_e {
    //% block="SerialMode"
    kSerialMode = 0,
    //% block="I2CMode"
    kI2CMode = 1,
    //% blockHidden=true 
    kUnknownMode,
}

declare const enum card_label_e {
    //% block="Forward"
    kCardForward = 1,
    //% block="Left"
    kCardLeft = 2,
    //% block="Right"
    kCardRight = 3,
    //% block="TurnAround"
    kCardTurnAround = 4,
    //% block="Park"
    kCardPark = 5,
    kCardCheck = 11,
    //% block="Cross"
    kCardCross = 12,
    //% block="Circle"
    kCardCircle = 13,
    //% block="Square"
    kCardSquare = 14,
    //% block="Triangle"
    kCardTriangle = 15,
}
declare const enum color_label_e {
    //% block="Black"
    kColorBlack = 1,
    //% block="White"
    kColorWhite = 2,
    //% block="Red"
    kColorRed = 3,
    //% block="Green"
    kColorGreen = 4,
    //% block="Blue"
    kColorBlue = 5,
    //% block="Yellow"
    kColorYellow = 6,
    //% block="Unkown"
    kColorUnkown = 7
}

declare const enum SentryStatus {
    //% block="enable"
    Enable = 1,
    //% block="disable"
    Disable = 0,
}

declare const enum sentry_obj_info_e {
    //% block="status"
    kStatus = 0,
    //% block="x position"
    kXValue = 1,
    //% block="y position"
    kYValue = 2,
    //% block="width"
    kWidthValue = 3,
    //% block="height"
    kHeightValue = 4,
    //% block="label"
    kLabel = 5,
    //% block="red channel"
    kRValue = 6,
    //% block="green channel"
    kGValue = 7,
    //% block="blue channel"
    kBValue = 8,
}

declare const enum sentry_gen_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue,
    //% block="label"
    kLabel
}

declare const enum sentry_Line_info_e {
    //% block="X coordinate of end point"
    kXValue = 1,
    //% block="Y coordinate of end point"
    kYValue,
    //% block="X coordinate of starting point"
    kWidthValue,
    //% block="Y coordinate of starting point"
    kHeightValue,
    //% block="inclination angle"
    kLabel
}

declare const enum sentry_qr_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue
}

declare const enum sentry_color_info_e {
    //% block="red channel"
    kRValue = 6,
    //% block="green channel"
    kGValue = 7,
    //% block="blue channel"
    kBValue = 8,
    //% block="label"
    kLabel = 5
}

declare const enum sentry_addr_e {
    //% block="0x60"
    ADDR1 = 0x60,
    //% block="0x61"
    ADDR2 = 0x61,
    //% block="0x62"
    ADDR3 = 0x62,
    //% block="0x63"
    ADDR4 = 0x63,
}
