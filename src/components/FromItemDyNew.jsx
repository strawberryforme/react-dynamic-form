import { useEffect,useState } from 'react';
import {Radio, Select ,Checkbox, Form, Button} from 'antd';
import {formItem1} from './Item.config';
function FromItemDyNew() {
  const [useform] = Form.useForm();


  const onFinish = (values) => {
    console.log('Success:', values);

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (<>
    FormDyNew动态表单：
    <br />
    <Form
    form={useform}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // initialValues	表单默认值，只有初始化以及重置时生效	object
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <DeepFormItem config ={formItem1} useform={useform}/>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>)
};
export default FromItemDyNew;

function DeepFormItem({config, useform}) {
  const [filedValue, setFiledValue] = useState("");
  const [nextConfig, setNextConfig] = useState(null);

  const handleInputChange = () => {

  };

  const handleSelectChange = (e) => {
    setFiledValue(e);
  };

  const handleRadioChange = (e) => {
    setFiledValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    console.log(e);
    setFiledValue(e);
  };

  useEffect(() => {
    // config的时候第一次渲染。
    if (config === null) {
      return;
    }
    // if (config.name === 'logType') {
    //   const res = config.nextItem(filedValue);
    //   setNextConfig(res);
    //   return;
    // }

    let commonValue = '';
    
    if (filedValue === '') {
      console.log("config",config);
      commonValue = config.payload.deFaultValue;
      useform.setFieldsValue({
        [config.payload.name]: commonValue,
      });
      if(commonValue !== '') {
        sessionStorage.setItem([config.payload.name], JSON.stringify(commonValue));
      }
      // session取出字符串变成数组： 这里面需要字符串数组变成数组。取出来的时候是数组。
    } else {
      sessionStorage.setItem([config.payload.name], JSON.stringify(filedValue));
      commonValue = filedValue;
    }
    const nextI = config.nextItem(commonValue);
    setNextConfig(nextI);
  }, [config,filedValue]);
  

  return (
    <>{
      (config !== null) && (<>
        {/* <Form.Item 
          label={config.payload.label}
          name={config.payload.name}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        > */}
        {config.type === 'select' && 
                <Form.Item 
                label={config.payload.label}
                name={config.payload.name}
                // initialvalues={config?.payload?.deFaultValue} 现在不起作用了
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
            <Select 
              value={filedValue} 
              options={config.payload.options}
              onChange={handleSelectChange}
            />
            </Form.Item>
          }
          {config.type === 'radio' && 
            <Form.Item 
            label={config.payload.label}
            name={config.payload.name}
                // initialvalues={config?.payload?.deFaultValue} 现在不起作用了
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Radio.Group 
              value={filedValue} 
              options={config.payload.options}
              onChange={handleRadioChange}
            />
            </Form.Item>
          }
          {config.type === 'checkbox' && 
            <Form.Item 
            label={config.payload.label}
            name={config.payload.name}
            // initialvalues={config?.payload?.deFaultValue} 现在不起作用了
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Checkbox.Group
              value={filedValue} 
              options={config.payload.options}
              onChange={handleCheckboxChange}
            />
            </Form.Item>
          }
        {/* </Form.Item> */}
        <DeepFormItem config={nextConfig} useform={useform}/>
      </>)
    }
    </>
  );
}
// 我现在的想法是。如果选择到了，产品类型，给你默认全部选择。
// 能不能给产品类型初始化呢？啥意思呢。就是给产品类型。useState进行初始化。
// 那我在config 里面进行传值就行了。如果config里面配置一个。