import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Color } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

type Props = {
  text: string,
  color: "default" | "inherit" | "primary" | "secondary"
}

export default function ContainedButtons(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color={props.color}>{props.text}</Button>
    </div>
  );
}
