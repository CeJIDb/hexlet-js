import _ from 'lodash';
import * as fsTrees from '@hexlet/immutable-fs-trees';
import { map } from '../src/fsTreeUtils.js';

test('immutable', () => {
  const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('eTc', [
      fsTrees.mkdir('NgiNx'),
      fsTrees.mkdir('CONSUL', [fsTrees.mkfile('config.json')]),
    ]),
    fsTrees.mkfile('hOsts'),
  ]);
  const original = _.cloneDeep(tree);

  map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);

  expect(tree).toEqual(original);
});

test('map 1', () => {
  const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('eTc', [
      fsTrees.mkdir('NgiNx'),
      fsTrees.mkdir('CONSUL', [fsTrees.mkfile('config.json')]),
    ]),
    fsTrees.mkfile('hOsts'),
  ]);

  const actual = map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NGINX',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'CONFIG.JSON', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'ETC',
        type: 'directory',
      },
      { meta: {}, name: 'HOSTS', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});
