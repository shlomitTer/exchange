import React, { useEffect, useState } from 'react'
import { doApiGet } from '../services/apiService';
import SwitchBtn from './switchBtn'

export default function InputEx(props) {
  const [coinsAr, setCoinsAr] = useState([]);
  const [selectFrom, setSelectFrom] = useState({});
  const [selectTo, setSelectTo] = useState({});
  const [input, setInput] = useState(1);

  useEffect(() => {
    doApi();
  }, []);


  useEffect(() => {
    let res = (input / selectFrom.value * selectTo.value).toLocaleString();
    let temp_obj={input:input, selectFrom:selectFrom.lable, selectTo:selectTo.lable, res:res}
    console.log(temp_obj)

   props.setShow(temp_obj);
  }, [input, selectFrom, selectTo])


  const doApi = async () => {
    let url = "https://api.currencyapi.com/v2/latest?apikey=bxgYYCNzz2iiY1flDuZvuYv5seinAcwpl5mrhdRQ"
    let resp = await doApiGet(url);
    let temp_ar = [];
    for (let key in resp.data.data) {
      temp_ar.push({ lable: key, value: resp.data.data[key] })
    }
    console.log(temp_ar)
    setCoinsAr(temp_ar);
    setSelectFrom({ lable: "USD", value: resp.data.data.USD });
    setSelectTo({ lable: "ILS", value: resp.data.data.ILS });
  }

  const onChangeCoinFrom = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let newLable = e.nativeEvent.target[index].text
    setSelectFrom({ lable: newLable, value: e.target.value });
  }

  const onChangeCoinTo = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let newLable = e.nativeEvent.target[index].text
    setSelectTo({ lable: newLable, value: e.target.value });
  }

  // console.log(coinsAr)
  // console.log(selectFrom)

  return (
    <div className='row justify-content-center '>
      <div className='col-md-3'>
        <input onInput={(e) => {
          setInput(e.target.value);
        }} placeholder='amount' type='number' className='form-control' min="1" defaultValue={input} />
      </div>

      <div className='col-md-2 row justify-content-center '>
        <select onChange={onChangeCoinFrom} className='form-control' value={selectFrom.value} lable={selectFrom.lable}>
          {coinsAr.map(item => {
            return (
              <option lable={item.lable} value={item.value} key={item.lable}>{item.lable}</option>

            )
          })}
        </select>

        <SwitchBtn selectTo={selectTo} setSelectTo={setSelectTo} selectFrom={selectFrom} setSelectFrom={setSelectFrom} />

        <select onChange={onChangeCoinTo} className='form-control' value={selectTo.value} lable={selectTo.lable} >
          {coinsAr.map(item => {
            return (
              <option lable={item.lable} value={item.value} key={item.lable}>{item.lable}</option>

            )
          })}
        </select>
      </div>
    </div>
  )
}