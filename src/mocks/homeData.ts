export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'お部屋', href: '#rooms' },
  { label: '設備', href: '#facilities' },
  { label: '料理', href: '#cuisine' },
  { label: '料金', href: '#pricing' },
  { label: 'アクセス', href: '#access' },
];

export const rooms = [
  {
    id: 'suite',
    name: 'スイートルーム',
    nameEn: 'Suite Room',
    capacity: '2〜3名',
    size: '56㎡',
    description: 'キングベッド／Wi-Fi／バスルーム／温水洗浄トイレ／タオルセット／ボディソープ／シャンプー／コンディショナー／シャワーキャップ／メイク落とし／洗顔料／化粧水・乳液／コットン／綿棒／ハンドソープ／歯ブラシセット／ヘアドライヤー／ヘアアイロン／ヘアブラシ／ヘアゴム／カミソリ／ハンガー／消臭スプレー／スリッパ／パジャマ／バスローブ／冷蔵庫／ミネラルウォーター／湯沸かしポット／お茶セット／コーヒー／エアコン／加湿器／コンセント／ルームライト・読書灯／耳栓／',
    price: '¥38,000〜/泊（2名利用・1泊2食付）',
    imageSeq: 'room-suite-01',
    featured: true,
  },
  {
    id: 'deluxe',
    name: 'デラックスルーム',
    nameEn: 'Deluxe Room',
    description: '落ち着いた色調でまとめた上質な空間。ハリウッドツイン仕様のベッドと、ゆったりとしたリビングスペースが魅力です。',
    capacity: '2名',
    size: '42㎡',
    price: '¥28,000〜/泊（2名利用・1泊2食付）',
    imageSeq: 'room-deluxe-02',
    featured: false,
  },
  {
    id: 'standard',
    name: 'スタンダードルーム',
    nameEn: 'Standard Room',
    description: 'コンパクトながらも細部までこだわった心地よい空間。旅の疲れをゆっくり癒すのに最適なお部屋です。',
    capacity: '1〜2名',
    size: '30㎡',
    price: '¥19,000〜/泊（2名利用・1泊2食付）',
    imageSeq: 'room-standard-03',
    featured: false,
  },
];

export const facilities = [
  { icon: 'ri-wifi-line', label: '無料Wi-Fi', description: '全館高速インターネット完備' },
  { icon: 'ri-temp-hot-line', label: '温泉風呂', description: '自家源泉かけ流しの内湯・露天' },
  { icon: 'ri-restaurant-line', label: 'ダイニング', description: '本格洋食を愉しむメインダイニング' },
  { icon: 'ri-cup-line', label: 'ラウンジ', description: '暖炉を囲むくつろぎの空間' },
  { icon: 'ri-book-open-line', label: 'ライブラリー', description: '洋書と邦書を取り揃えた読書室' },
  { icon: 'ri-parking-box-line', label: '無料駐車場', description: '最大15台収容可能' },
  { icon: 'ri-shirt-line', label: 'アメニティ', description: 'タオル・バスローブ・スキンケア一式' },
  { icon: 'ri-wheelchair-line', label: 'バリアフリー', description: '館内段差なし・車椅子対応' },
];

export const cuisineImages = [
  { seq: 'cuisine-01', alt: '前菜の盛り合わせ' },
  { seq: 'cuisine-02', alt: 'メインディッシュ' },
  { seq: 'cuisine-03', alt: 'デザートプレート' },
  { seq: 'cuisine-04', alt: '朝食のテーブル' },
  { seq: 'cuisine-05', alt: 'ティーセット' },
];

export const pricingPlans = [
  {
    name: 'スタンダードプラン',
    price: '¥19,000',
    per: '/泊（2名利用・1泊2食付）',
    features: ['スタンダードルーム', '季節のディナーコース', '朝食ビュッフェ', '温泉入浴'],
    recommended: false,
  },
  {
    name: 'デラックスプラン',
    price: '¥28,000',
    per: '/泊（2名利用・1泊2食付）',
    features: ['デラックスルーム', '特別ディナーコース', '朝食ビュッフェ', '温泉入浴', 'ウェルカムドリンク'],
    recommended: true,
  },
  {
    name: 'スイートプラン',
    price: '¥38,000',
    per: '/泊（2名利用・1泊2食付）',
    features: ['スイートルーム', 'シェフ特製フルコース', 'ルームサービス朝食', '温泉入浴', 'ウェルカムドリンク', 'アーリーチェックイン'],
    recommended: false,
  },
];

export const accessInfo = {
  address: '〒389-2502 長野県下高井郡野沢温泉村豊郷1234',
  train: 'JR北陸新幹線 飯山駅より車で約25分',
  car: '上信越自動車道 豊田飯山ICより約30分',
  bus: '飯山駅より野沢温泉行き路線バス「豊郷」下車 徒歩5分',
};