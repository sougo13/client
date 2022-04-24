import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/tracks';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {

  const router = useRouter();

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <img src={track.image} width={70} height={70} />
      <Grid container direction='column' style={{ width: '200px', margin: '0 20px' }}>
        <div>
          {track.name}
        </div>
        <div style={{ fontSize: 12, color: 'gray' }}>
          {track.artist}
        </div>
      </Grid>
      {active && <div>02:10 / 03:30</div>}
      <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem