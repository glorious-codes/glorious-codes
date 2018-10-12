import shortId from 'shortid';

const _public = {};

_public.generate = () => {
  return shortId.generate();
};

export default _public;
