import { useEffect,useState } from 'react';
import {Radio, Select ,Checkbox, } from 'antd';
import {formItem1} from './Item.config';
function FormDyNew() {
  return (<>
    FormDyNew动态表单：
    <br />
    <DeepFormItem config ={formItem1}/>
  </>)
};
export default FormDyNew;

function DeepFormItem({config}) {
  console.log(config);
  const [filedValue, setFiledValue] = useState('');
  const [nextConfig, setNextConfig] = useState(null);

  const handleInputChange = () => {

  };

  const handleSelectChange = (e) => {
    console.log(e);
    setFiledValue(e);
  };

  const handleRadioChange = (e) => {
    setFiledValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setFiledValue(e.target.value);
  };

  useEffect(() => {
    // config的时候第一次渲染。
    if (config === null) {
      return;
    }
    console.log(config.nextItem)
    const res = config.nextItem(filedValue);
    setNextConfig(res);
  }, [filedValue, config]);

  return (
    <>{
      (config !== null) && (<>
        {config.type === 'select' && 
          <Select 
            value={filedValue} 
            options={config.payload.options}
            onChange={handleSelectChange}
          />
        }
        {config.type === 'radio' && 
          <Radio.Group 
            value={filedValue} 
            options={config.payload.options}
            onChange={handleRadioChange}
          />
        }
        {config.type === 'checkbox' && 
          <Checkbox.Group 
            value={filedValue} 
            options={config.payload.options}
            onChange={handleCheckboxChange}
          />
        }
        <div>
        <DeepFormItem config={nextConfig} />
        </div>
      </>)
    }
    </>
  );
}