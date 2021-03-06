import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import TracksList from '../../components/TracksList'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/tracks'

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      _id: "62654b75df8e722451a2ab7b",
      name: "Проклятье русалки",
      artist: "Green Apelsin",
      text: "На носочках темной ночью тень ее крадется\nСвадьбы избегая, в отчий дом та не вернется\nПо вине судьбы жестокой, в судно с черным флагом\nВзгляд бросая одинокий, пробралась к пиратам\n\nНа борту девица! Беде дано случиться!\nПлатье по кругу идет, и ей лучше смириться\nНа борту девица, так дайте утопиться!\nНа прогулке по доске, встречай ее, водица!\n\nПоздно милый, но не пугайся\nДьяволу морскому отдайся\nТонет тело, дай ему время\nЯ - твой кошмар и волн морских демон\n\nНад водою стелется туман непроходимый\nСбился капитан с пути, безумием водимый\nСлышит голос нежный и знакомый уж до боли\nКрасоте ее лица противиться неволен\n\nЗа бортом девица! Попробуй не влюбиться!\nСлух ласкает песни звон, ему лучше смириться\nЗа бортом девица! Он хочет утопиться!\nВсе готов отдать пират, чтоб с ней губами слиться!\n\nПоздно милый, но не пугайся\nДьяволу морскому отдайся\nТонет тело, дай ему время\nЯ - твой кошмар и волн морских демон\n\nМести сладкий вкус - ее проклятье\nХвост - ее разорванное платье\nКапитана жизни не жалко\nПомнит горечь смерти русалка",
      listens: 0,
      image: "http://localhost:5000/image/e91995d1-7f1e-44fe-a9ed-5f79cdda1076.jpg",
      audio: "http://localhost:5000/audio/fc391295-e7f9-48a9-8ad8-67a7d73b6da2.mp3",
      comments: []
    },
    {
      _id: "626175f125f3c9a6e0578d96",
      name: "Труп Невесты",
      artist: "Green Apelsin",
      text: "Разрывая землю, пальцы в кровь сотру\nЛесогробовую тишину прерву\nВетер жутко воет, зов твой мне несет\nВ этот раз я верю, точно повезет\n\nНе пугайся милый, суженый, родной\nЖизнь не разлучит нас, не беги, постой\nОт меня не скрыться, как и от судьбы\nБог услышал с преисподнии мои мольбы\n\nЧувство будто снова в груди бьется сердце\nЯ тебе открою смерти нежной дверцу\nМы покинем мир живых нам здесь нет места\nТы живой жених, я мертвая невеста\n\nОт чего лицо твое печальное\nВедь на мне колечко обручальное\nМожет не по нраву тело бледное\nИли ты влюблен во что-то смертное?\n\nРазве ты не клялся мне в верности и любви?\nПусть мне боль не страшна и нет во мне живой крови\nПочему же больно, в пустоте внутри?\nЕсть во мне остаток горьких слез, смотри\n\nЧувство будто снова в груди рвется сердце\nЯ тебе открою смерти верной дверцу\nТы покинешь мир живых, твое здесь место\nТы лишь мой жених а я твоя невеста\n\nЧувство будто снова в груди нету сердца\nНавсегда закрыта в мое счастье дверца\nЯ покину мир живых мне нет здесь места\nТы живой жених\nЯ мертвая невеста",
      listens: 0,
      image: "http://localhost:5000/image/d8f0c80f-a2a9-45fc-830e-a09f7f820748.jpg",
      audio: "http://localhost:5000/audio/37911ad6-e0b7-4836-8aec-f68322a60b77.mp3",
      comments: []
    },
    {
      _id: "62654b46df8e722451a2ab79",
      name: "Охота на лисицу",
      artist: "Green Apelsin",
      text: "Далеко, в той стране, где всходит солнце\nРанним утром милый больше не проснется\nЛьется алая река, лиса смеется\nС восточным ветром пусть сказание несется\n\nВ забытом ныне городе жила девица\nВеликим самураям от любви не спится\nЛица жадные горят. Как не влюбиться?\nНо в хитрых девичьих глазах кошмар таится\n\nНе беги за нею, глупый\nПо ее следам идут лишь трупы\nВ зубы крепче чем металл…\nТы попал!\n\nПо улице шагает, бедрами качая\nДурак влюбленный пригласит на кружку чая\nЗлая вслед кричит жена, свой брак спасая\nВ нем голос совести сожрет любовь глухая\n\nПод нежным платьем хвостов девять у лисицы\nСведут с ума, дорожкой в гроб ведут ресницы\nЖрицей страсти названа, лишь единицы\nОставшись в разуме, не могут с ней смириться\n\nСлышен вдалеке собачий вой\nОхота за лисьей головой\nСверкает в темноте оскал\nОн попал!\n\nИ в норе, где не достанут псы\nТихий шепот раненой лисы\nПроклинает та свою любовь:\n\nЯркий мой свет, скажи любишь или нет\nЯ тобой была пьяна, но дома ждет тебя она\nМою тайну всем открыл, гнев мой тебя погубил\nМестью жить мне до конца, полюбила я лжеца…",
      listens: 0,
      image: "http://localhost:5000/image/f299438f-01ff-45f3-9f1a-1bca1a1504fe.jpg",
      audio: "http://localhost:5000/audio/bdb90d82-f3ae-46f2-974a-bf502ded41e8.mp3",
      comments: []
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: '900px' }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TracksList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index