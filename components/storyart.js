import WordpressImage from './wordpressimage';
import BtnUI from './btnui';
import Overlay from './overlay'
import styles from './storyart.module.scss'
import { useState } from 'react'

const StoryArt = ({youtubeUrl, storyArt}) => {
    const [isVideoVisible, setVideoVisible] = useState(false)


  return <div className={styles.story_art_container}>
      <WordpressImage data={storyArt}/>
      {youtubeUrl &&      
        <BtnUI icon="play" clickHandler={() => {
            setVideoVisible(true)
        }} />
      }
      {isVideoVisible &&
        <Overlay 
            type="video" 
            closeHandler={() => {
                setVideoVisible(false)
         }} 
            youtubeUrl={youtubeUrl}
         />

      }
  </div>
}
export default StoryArt