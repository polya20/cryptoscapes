import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Avatar, CardHeader } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import CardLayout from '../molecules/CardLayout';
import { useAppSelector } from '../../../app/hooks';
import { selectGlobalCoinData } from '../../../features/globalCoinDataSlice';
import { shortenNumber } from '../../../common/helpers/shortenNumber';
import { BarChartRounded } from '@material-ui/icons';
import VolumeBarChart from '../atoms/VolumeBarChart';

const useStyles = makeStyles((theme: Theme) => ({
  chartWrapper: {
    height: 'calc(100% - 84px)',
    width: '100%',
  },
  avatarColor: {
    marginRight: 6,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.card.paper,
    borderRadius: 8
  }
}));

const VolumeCard: React.FC = () => {
  const classes = useStyles(0);

  const globalCoinData = useAppSelector(selectGlobalCoinData);

  return (
    <CardLayout>
      <CardHeader
        title="Total Volume"
        titleTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
        subheader={
          globalCoinData.value !== null ?
            `US$${shortenNumber(globalCoinData.value.totalVolume.usd)}` :
            <Skeleton animation="wave" height={32} width={150} />
        }
        subheaderTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
        avatar={
          <Avatar variant="rounded" className={classes.avatarColor}>
            <BarChartRounded />
          </Avatar>
        }
      />
      <div className={classes.chartWrapper}>
        <VolumeBarChart />
      </div>
    </CardLayout>
  )
}

export default VolumeCard