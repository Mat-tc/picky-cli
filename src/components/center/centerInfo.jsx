import React, { useContext } from 'react'
import styles from './centerInfo.module.css'
import SimpleImageSlider from 'react-simple-image-slider'
import useWindowDimensions from '../common/window'
import { ThemeContext } from '@/App'
import { ReactComponent as Won } from '@icon/won.svg'
import { ReactComponent as Road } from '@icon/road.svg'
import { ReactComponent as Phone } from '@icon/phone.svg'
import { ReactComponent as Location } from '@icon/location.svg'
import { ReactComponent as Home } from '@icon/home.svg'
const CenterInfo = () => {
  const data = {
    centerName: '남스짐 옥길점',
    centerTel: '0507-1427-3375',
    address: '경기 부천시 옥길로 124 퀸즈파크 C동 8층 남스짐',
    roadAddress: '경기 부천시 옥길로 124 퀸즈파크 C동 8층 남스짐',
    homePage: 'http://m.golfzon.com/ghome/7564#!/ghome/main',
    price: '7000(운동복 포함)',
    rate: '4.3',
  }

  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? 'light' : 'dark'

  const { width } = useWindowDimensions()

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
    },
  ]
  return (
    <section className={styles.container}>
      <div className={styles.imgSlider}>
        <SimpleImageSlider
          width={width > 768 ? '100%' : '100%'}
          height={width > 768 ? 500 : 350}
          position='relative'
          images={images}
          showBullets={true}
          showNavs={true}
          className={styles.images}
          style={{
            position: 'relative',
            borderRadius: '10px',
          }}
        />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h3>
            {data.centerName} (⭐{data.rate})
          </h3>
        </div>
        <div>
          <li className={styles.list}>
            <dd className={styles.sort}>
              <Won
                width='15'
                height='15'
                fill={theme == 'dark' ? 'black' : '#fff'}
              />
            </dd>
            <dd className={styles.item}>{data.price}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>
              <Location
                width='15'
                height='15'
                fill={theme == 'dark' ? '#fff' : 'black'}
                stroke={theme == 'dark' ? '#333' : '#fff'}
              />
            </dd>
            <dd className={styles.item}>{data.address}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>
              <Road
                width='15'
                height='15'
                fill={theme == 'dark' ? '#fff' : 'black'}
                stroke={theme == 'dark' ? '#333' : '#fff'}
              />
            </dd>
            <dd className={styles.item}>{data.roadAddress}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>
              <Phone
                width='15'
                height='15'
                fill={theme == 'dark' ? '#fff' : 'black'}
                stroke={theme == 'dark' ? '#333' : '#fff'}
              />
            </dd>
            <dd className={styles.item}>{data.centerTel}</dd>
          </li>

          <li className={styles.list}>
            <dd className={styles.sort}>
              <Home
                width='15'
                height='15'
                fill={theme == 'dark' ? '#fff' : 'black'}
                stroke={theme == 'dark' ? '#333' : '#fff'}
              />
            </dd>
            <dd className={styles.item}>{data.homePage}</dd>
          </li>
        </div>
        <button className={styles.resBtn}>예약하기</button>
      </div>
    </section>
  )
}

export default CenterInfo
