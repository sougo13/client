import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

const Player: React.FC = () => {

  const track: ITrack = {
    _id: "62654b46df8e722451a2ab79",
    name: "Охота на лисицу",
    artist: "Green Apelsin",
    text: "Далеко, в той стране, где всходит солнце\nРанним утром милый больше не проснется\nЛьется алая река, лиса смеется\nС восточным ветром пусть сказание несется\n\nВ забытом ныне городе жила девица\nВеликим самураям от любви не спится\nЛица жадные горят. Как не влюбиться?\nНо в хитрых девичьих глазах кошмар таится\n\nНе беги за нею, глупый\nПо ее следам идут лишь трупы\nВ зубы крепче чем металл…\nТы попал!\n\nПо улице шагает, бедрами качая\nДурак влюбленный пригласит на кружку чая\nЗлая вслед кричит жена, свой брак спасая\nВ нем голос совести сожрет любовь глухая\n\nПод нежным платьем хвостов девять у лисицы\nСведут с ума, дорожкой в гроб ведут ресницы\nЖрицей страсти названа, лишь единицы\nОставшись в разуме, не могут с ней смириться\n\nСлышен вдалеке собачий вой\nОхота за лисьей головой\nСверкает в темноте оскал\nОн попал!\n\nИ в норе, где не достанут псы\nТихий шепот раненой лисы\nПроклинает та свою любовь:\n\nЯркий мой свет, скажи любишь или нет\nЯ тобой была пьяна, но дома ждет тебя она\nМою тайну всем открыл, гнев мой тебя погубил\nМестью жить мне до конца, полюбила я лжеца…",
    listens: 0,
    image: "http://localhost:5000/image/f299438f-01ff-45f3-9f1a-1bca1a1504fe.jpg",
    audio: "http://localhost:5000/audio/bdb90d82-f3ae-46f2-974a-bf502ded41e8.mp3",
    comments: []
  }

  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction='column' style={{ width: '200px', margin: '0 20px' }}>
        <div>
          {track.name}
        </div>
        <div style={{ fontSize: 12, color: 'gray' }}>
          {track.artist}
        </div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => { }} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => { }} />
    </div>
  )
}

export default Player