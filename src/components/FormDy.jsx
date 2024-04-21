import React,{ useEffect, useState } from 'react';
import {Radio, Select ,Checkbox} from 'antd';

function FormDy() {
  const formItem1 = CreateItem(
    'select',
    {
      label: '业务领域',
      value: '0', 
      options: [
        {label:'智能光伏', value:'1'},
        {label:'站点能源', value:'2'},
        {label:'数据中心', value:'3'},
        {label:'充电网络', value:'4'},
      ],
    },
    (current) => {
      if (current === null) {
        return null;
      }
      if (current["payload"]["value"] === '1') {
        console.log("formItem1里面的2",formItem2);
        return formItem2;
      } else if (current["payload"]["value"] === '2') {
        return formItem3;
      }else if (current["payload"]["value"] === '3') {
        return formItem4;
      } else if (current["payload"]["value"] === '4') {
        return formItem5;
      } else {
        return null;
      }
    }
  );
  
  const formItem2 = CreateItem(
    'radio',
    {
      label: '产品类型',
      value: '1',
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
      ] 
    },
    (current) => {
      if(current === null) {
        return null;
      }
      console.log(current);
      if (current["payload"]["value"] === '1') {
        return formItem6;
      } else if (current["payload"]["value"] === '2') {
        return formItem7;
      } else {
        return formItem7;
      }
    }
  );

  useEffect(()=>{
    console.log("formItem2", formItem2);
  },[formItem2]);


  const formItem3 = CreateItem(
    'radio',
    {
      label: '产品类型',
      value: '1',
      options: [
        {label:'CMU',value:'1'},
        {label:'锂电CAN',value:'2'},
        {label:'锂电MODBUS',value:'3'},
      ] 
    },
    (current) => null
  );

  const formItem4 = CreateItem(
    'radio',
    {
      label: '产品类型',
      value: '1',
      options: [
        {label:'锂电',value:'1'},
        {label:'UPS',value:'2'},
      ] 
    },
    (current) => null
  );

  const formItem5 = CreateItem(
    'radio',
    {
      label: '产品类型',
      value: '1',
      options: [
        {label:'直流',value:'1'},
        {label:'充电模块',value:'2'},
      ] 
    },
    (current) => null
  );

  const formItem6 = CreateItem(
    'checkbox',
    {
      label: '日志类型',
      value: '1',
      options: [
        {label:'性能',value:'1'},
        {label:'告警',value:'2'},
        {label:'5分钟研发数据',value:'3'},
        {label:'故障录波',value:'4'},
        {label:'告警快照',value:'5'},
        {label:'旁路日志',value:'6'},
        {label:'操作日志',value:'7'},
      ] 
    },
    (current) => null
  );

  const formItem7 = CreateItem(
    'checkbox',
    {
      label: '日志类型',
      value: '1',
      options: [
        {label:'性能',value:'1'},
        {label:'告警',value:'2'},
        {label:'5分钟研发数据',value:'2'},
        {label:'故障录波',value:'2'},
      ] 
    },
    (current) => null
  );

  return (<>
    动态表单
    <DeepItem itemAllData={formItem1}  key={formItem2}/>
  </>)
}
export default FormDy;

function DeepItem ({itemAllData}){
  const getNextItem = () => {
    if (itemAllData === null || itemAllData === undefined) {
      return null;
    }
    let current = itemAllData.item;
    if (itemAllData) {
      console.log("current，label", itemAllData.item.payload.label, itemAllData.item.next(current));
    }
    return itemAllData.item.next(current);
  };

  const onSelectChange = (e) => {
    itemAllData.setItem({
      ...itemAllData.item,
      payload: {
        ...itemAllData.item.payload,
        value: e,
      }
    });
  };

  const onRadioChange = (e) => {
    console.log(e.target.value);
    itemAllData.setItem({
      ...itemAllData.item,
      payload: {
        ...itemAllData.item.payload,
        value: e.target.value,
      }
    });
  };

  return (
    <>
      {
        (itemAllData !== null) && (<>
          <div>
            {
              itemAllData.item.type === 'select' && 
              <Select 
                value={itemAllData.item.payload.value} 
                options={itemAllData.item.payload.options}
                onChange={onSelectChange}
                />
            }
          </div>
          <div>
            {
              itemAllData.item.type === 'radio' && 
              <Radio.Group 
                options={itemAllData.item.payload.options}
                onChange={onRadioChange}
                value={itemAllData.item.payload.value} 
                />
            }
          </div>
          <div>
            {
              itemAllData.item.type === 'checkbox' && 
              
              <Checkbox.Group
                options={itemAllData.item.payload.options}
              />
            }
          </div>
          <DeepItem itemAllData={getNextItem()}/>
        </>)
      }
    </>
  )
}

function CreateItem(type, payload, nextFunc) {
  const nextFunction = (current) => {
    const nextItem = nextFunc(current);
    return nextItem;
  };
  const [item, setItem] = useState({
    type,
    payload,
    next: nextFunction,
  });

  return ({item, setItem});
}