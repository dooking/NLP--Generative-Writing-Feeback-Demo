import Image from 'next/image';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Mark D Shermis and Jill C Burstein. Automated essay scoring',
    description: 'A cross-disciplinary perspective Routledge, 2003',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title: 'Zixuan Ke and Vincent Ng. Automated essay scoring',
    description:
      'A survey of the state of the art. In IJCAI volume 19, pages 6300–6308, 2019',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Lawrence M Rudner and Tahung Liang. Automated essay scoring using bayes’ theorem.',
    description:
      'The Journal of Technology, Learning and Assessment, 1(2), 2002',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Yigal Attali and Jill Burstein. Automated essay scoring with e-rater® v. 2.',
    description:
      'The Journal of Technology, Learning and Assessment, 4(3), 2006.',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Yucheng Wang, Zhongyu Wei, Yaqian Zhou, and Xuanjing Huang. Automatic essay scoring incorporating rating schema via reinforcement learning',
    description:
      ' In Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing, pages 791–797, Brussels, Belgium, October-November 2018. Association for Computational Linguistics',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Kaggle. Develop an automated scoring system algorithm for student-written essays, 2012.',
    description: '',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Kaveh Taghipour and Hwee Tou Ng. A neural approach to automated essay scoring. ',
    description:
      'In Proceedings of the 2016 conference on empirical methods in natural language processing, pages 1882–1891, 2016.',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Shun Kiyono, Jun Suzuki, Masato Mita, Tomoya Mizumoto, and Kentaro Inui. An empirical study of incorporating pseudo data into grammatical error correction.',
    description: 'arXiv preprint arXiv:1909.00502, 2019',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Masahiro Kaneko, Masato Mita, Shun Kiyono, Jun Suzuki, and Kentaro Inui. Encoder-decoder models can benefit from pre-trained masked language models in grammatical error correction',
    description: 'arXiv preprint arXiv:2005.00987, 2020',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Kaveh Taghipour and Hwee Tou Ng. A neural approach to automated essay scoring. ',
    description:
      'In Proceedings of the 2016 conference on empirical methods in natural language processing, pages 1882–1891, 2016.',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'Kaveh Taghipour and Hwee Tou Ng. A neural approach to automated essay scoring. ',
    description:
      'In Proceedings of the 2016 conference on empirical methods in natural language processing, pages 1882–1891, 2016.',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
];

import * as S from './style';

const Reference = () => {
  return (
    <S.ReferenceContainer>
      <S.Title>Reference</S.Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.link}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </S.ReferenceContainer>
  );
};

export default Reference;
