const formItem1 = {
  type: 'radio',
  payload: {
    label: '业务领域',
    name: 'service',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'智能光伏', value:'1'},
      {label:'站点能源', value:'2'},
      {label:'数据中心', value:'3'},
      {label:'充电网络', value:'4'},
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('service'))||'',
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]
  },
  nextItem: (currentValue) => {
    if (currentValue === null || currentValue === '') {
      return null;
    }
    console.log("firstCurrentValue",currentValue,currentValue===1);
    if (currentValue === '1') {
      console.log("formItem1里面的2",formItem2);
      return formItem2;
    } else if (currentValue === '2') {
      return formItem3;
    }else if (currentValue === '3') {
      return formItem4;
    } else if (currentValue === '4') {
      return formItem5;
    } else {
      return null;
    }
  }
}

const formItem2 = {
  type: 'radio',
  payload: {
    label: '产品类型',
    name: 'product',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'BCU',value:'1'},
      {label:'CMU',value:'2'},
      {label:'PCS',value:'3'},
      {label:'数采',value:'4'},
      {label:'STS',value:'5'},
      {label:'户用单项逆变器',value:'6'},
      {label:'EMMA',value:'7'},
      {label:'户用储能',value:'8'},
      {label:'储能液冷',value:'9'},
    ],
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('product'))||'',

  },
  nextItem: (currentValue) => {
    if(currentValue === null || currentValue === '') {
      return null;
    }
    console.log(currentValue);
    if (currentValue === '1') {
      return formItem6;
    } else if (currentValue === '2') {
      return formItem7;
    } else {
      return formItem7;
    }
  }
}

const formItem3 = {
  type: 'radio',
  name: 'product',
  payload: {
    label: '产品类型',
    name: 'product',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'CMU',value:'1'},
      {label:'锂电CAN',value:'2'},
      {label:'锂电MODBUS',value:'3'},
    ],
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('product'))||'',

  },
  nextItem: (currentValue) => null
}

const formItem4 = {
  type: 'radio',
  payload: {
    label: '产品类型',
    name: 'product',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'锂电',value:'1'},
      {label:'UPS',value:'2'},
    ],
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('product'))||'',

  },
  nextItem: (currentValue) => null
}

const formItem5 = {
  type: 'radio',
  payload: {
    label: '产品类型',
    name: 'product',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'直流',value:'1'},
      {label:'充电模块',value:'2'},
    ],
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('product'))||'',

  },
  nextItem: (currentValue) => null
}

const formItem6 = {
  type: 'checkbox',
  payload: {
    label: '产品类型',
    name: 'logType',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'性能',value:'1'},
      {label:'告警',value:'2'},
      {label:'5分钟研发数据',value:'3'},
      {label:'故障录波',value:'4'},
      {label:'告警快照',value:'5'},
      {label:'旁路日志',value:'6'},
      {label:'操作日志',value:'7'},
    ],
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('logType'))||'',

  },
  nextItem: (currentValue) => null
}

const formItem7 = {
  type: 'checkbox',
  payload: {
    label: '产品类型',
    name: 'logType',
    // value: '1'；这里面不能穿死value的值
    options: [
      {label:'性能',value:'1'},
      {label:'告警',value:'2'},
      {label:'5分钟研发数据',value:'2'},
      {label:'故障录波',value:'2'},
    ],
    deFaultValue: '1',
    rules:[
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    deFaultValue: JSON.parse(sessionStorage.getItem('logType'))||'',
  },
  nextItem: (currentValue) => null
}

export {
  formItem1
}