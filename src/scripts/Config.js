const Config = {
    ROSBRIDGE_SERVER_IP: "10.10.10.91",
    ROSBRIDGE_SERVER_PROT: "9090",
    RECONNECTION_TIMER: 3000,
    //CMD_VEL_TOPIC: "/turtle1/cmd_vel", //操控輸出 for turtle
    CMD_VEL_TOPIC: "/cmd_vel", //操控輸出
};

export default Config;