import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/tracks'

const TrackPage = () => {

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

  const router = useRouter();

  return (
    <MainLayout>
      <>
        <Button
          style={{ fontSize: 32 }}
          variant='outlined'
          onClick={() => router.push('/tracks')}
        >
          К списку
        </Button>
        <Grid container style={{ margin: '20px 0' }}>
          <img src={track.image} width='200px' height='200px' />
          <div style={{ marginLeft: '30px' }}>
            <h1>{track.name}</h1>
            <h1>{track.artist}</h1>
            <h1>Количество прослушиваний - {track.listens}</h1>
          </div>
        </Grid>
        <h1>Слова к треку</h1>
        <p>{track.text}</p>
        <h1>Комментарии</h1>
        <Grid container>
          <TextField
            label='Ваше имя'
            fullWidth
          />
          <TextField
            label='Комментарий'
            fullWidth
            multiline
            rows={4}
          />
          <Button>Отправить</Button>
        </Grid>
        <div>
          {track.comments.map(comment =>
            <div>
              <div>{comment.username}</div>
              <div>{comment.text}</div>
            </div>)}
        </div>
      </>
    </MainLayout>
  )
}

export default TrackPage