import profileAvatar from './index.hbs';

import IconAvatar from '../../../../static/icons/IconAvatar.svg';

export default ({ text }: { text: string }) => profileAvatar({ IconAvatar, text });
