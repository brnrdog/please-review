import * as React from 'react';

const styles = require('./styles');

export interface AvatarProps {
  url: string;
}

export default (props: AvatarProps) => (
  <img src={props.url} alt="" className={`${styles.avatar} rounded`} />
)
