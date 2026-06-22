export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'rooms', href: '#rooms' },
  { label: 'facilities', href: '#facilities' },
  { label: 'dishes', href: '#dishes' },
  { label: 'access', href: '#access' },
  { label: 'reservation', href: '#reservation' },
];

export const rooms = [
  {
    id: 'suite',
    name: 'スイートルーム',
    nameEn: 'Suite Room',
    capacity: '2〜3名',
    size: '56㎡',
    description: 'キングベッド／Wi-Fi／スマートTV／Bluetoothスピーカー／ジャグジー付きバスルーム／温水洗浄トイレ／タオルセット／ブランドバスアメニティ（ボディソープ・シャンプー・コンディショナー）／シャワーキャップ／スキンケアセット（洗顔料・化粧水・乳液・メイク落とし）／コットン／綿棒／ハンドソープ／歯ブラシセット／マウスウォッシュ／ヘアドライヤー／ヘアアイロン／ヘアブラシ／ヘアゴム／カミソリ／シェービングフォーム／ハンガー／消臭スプレー／スリッパ／パジャマ／バスローブ／冷蔵庫／ミネラルウォーター／湯沸かしポット／お茶セット／コーヒー／エアコン／加湿器／コンセント／マルチ充電ケーブル／ルームライト・読書灯／ワイングラス・オープナー／耳栓／ホットアイマスク',
    price: '¥38,000',
    per: '/泊（1泊2食付）',
    imageSeq: 'room-suite-01',
    featured: true,
  },
  {
    id: 'deluxe',
    name: 'デラックスルーム',
    nameEn: 'Deluxe Room',
    description: 'ツインベッド／Wi-Fi／バスルーム／温水洗浄トイレ／タオルセット／ボディソープ／シャンプー／コンディショナー／シャワーキャップ／スキンケアセット（洗顔料・化粧水・乳液）／綿棒／ハンドソープ／歯ブラシセット／ヘアドライヤー／ヘアアイロン／ヘアブラシ／カミソリ／ハンガー／消臭スプレー／スリッパ／パジャマ／冷蔵庫／ミネラルウォーター／湯沸かしポット／お茶セット／コーヒー／エアコン／加湿器／コンセント／マルチ充電ケーブル／ルームライト・読書灯',
    capacity: '2名',
    size: '42㎡',
    price: '¥28,000',
    per: '/泊（1泊2食付）',
    imageSeq: 'room-deluxe-02',
    featured: false,
  },
  {
    id: 'standard',
    name: 'スタンダードルーム',
    nameEn: 'Standard Room',
    description: 'ダブルベッド（またはシングル/ツインベッド）／Wi-Fi／バスルーム／温水洗浄トイレ／タオルセット／ボディソープ／シャンプー／コンディショナー／ハンドソープ／歯ブラシセット／ヘアドライヤー／ヘアブラシ／カミソリ／ハンガー／消臭スプレー／スリッパ／パジャマ／冷蔵庫／湯沸かしポット／お茶セット／エアコン／コンセント／ルームライト・読書灯',
    capacity: '1〜2名',
    size: '30㎡',
    price: '¥19,000',
    per: '/泊（1泊2食付）',
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

export const accessInfo = {
  address: '〒389-2502 長野県下高井郡野沢温泉村豊郷1234',
  train: 'JR北陸新幹線 飯山駅より車で約25分',
  car: '上信越自動車道 豊田飯山ICより約30分',
  bus: '飯山駅より野沢温泉行き路線バス「豊郷」下車 徒歩5分',
};