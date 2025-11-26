// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

export type ProductImport = {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  tagline: string;
  image: string;
  features: string[];
  heroImage: string;
  galleryImages: string[];
  sections: { title: string; content: string; image: string }[];
  specifications: { label: string; value: string }[];
};

export const productLines: ProductImport[] = [
  {
    name: 'Xe Đạp Điện Thành Phố',
    slug: 'xe-dap-dien-thanh-pho',
    tagline: 'Di Chuyển Đô Thị Linh Hoạt & Tiện Lợi',
    shortDesc: 'Di chuyển đô thị linh hoạt và tiện lợi',
    description:
      'Dòng xe lý tưởng cho việc đi làm, đi học và di chuyển trong thành phố',
    image:
      'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: [
      'Thiết kế nhỏ gọn',
      'Pin bền 50-70km',
      'Phanh đĩa an toàn',
      'Giá từ 8-12 triệu',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'Động Cơ & Hiệu Suất',
        content:
          'Trang bị động cơ brushless 350W với công nghệ tiết kiệm năng lượng, tốc độ tối đa 25km/h. Hệ thống trợ lực 3 chế độ: Eco, Normal, Sport. Khả năng leo dốc 15 độ.',
        image:
          'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Pin & Tầm Hoạt Động',
        content:
          'Pin lithium 48V-12Ah Samsung SDI, di chuyển 50-70km/lần sạc. Thời gian sạc 4-5 giờ. Hệ thống BMS bảo vệ pin.',
        image:
          'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'An Toàn & Tiện Nghi',
        content:
          'Phanh đĩa cơ học trước/sau, đèn LED công suất cao, còi điện, giỏ và yên ergonomic.',
        image:
          'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Brushless 350W, 48V' },
      { label: 'Pin', value: 'Lithium 48V-12Ah (Samsung SDI)' },
      { label: 'Tầm xa', value: '50-70km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '25 km/h' },
      { label: 'Thời gian sạc', value: '4-5 giờ' },
      { label: 'Phanh', value: 'Phanh đĩa cơ học trước/sau' },
      { label: 'Khung xe', value: 'Hợp kim nhôm cao cấp' },
      { label: 'Kích thước bánh xe', value: '20 inch' },
      { label: 'Trọng lượng xe', value: '25 kg' },
      { label: 'Tải trọng tối đa', value: '120 kg' },
      { label: 'Màu sắc', value: 'Đen, Trắng, Xanh, Đỏ' },
      { label: 'Bảo hành', value: '24 tháng (Pin 12 tháng)' },
    ],
  },
  {
    name: 'Xe Đạp Điện Địa Hình',
    slug: 'xe-dap-dien-dia-hinh',
    tagline: 'Khám Phá Mọi Địa Hình Với Sức Mạnh Vượt Trội',
    shortDesc: 'Khám phá mọi địa hình với sức mạnh vượt trội',
    description: 'Dòng xe với động cơ mạnh mẽ và khung xe chắc chắn',
    image:
      'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: [
      'Động cơ 500-750W',
      'Pin dung lượng cao',
      'Giảm sóc thủy lực',
      'Giá từ 15-25 triệu',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'Động Cơ Mạnh Mẽ',
        content:
          'Động cơ brushless 750W Bafang, leo dốc 30 độ dễ dàng. Tốc độ tối đa 35km/h. PAS 5 cấp độ.',
        image:
          'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Pin Dung Lượng Cao',
        content:
          'Pin lithium 48V-20Ah, di chuyển 80-100km/lần sạc. Pin tháo rời tiện lợi, tuổi thọ 1000 chu kỳ.',
        image:
          'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Hệ Thống Giảm Sóc',
        content:
          'Giảm sóc thủy lực trước/sau 80mm, lốp 27.5 inch chống trượt, phanh đĩa thủy lực Shimano.',
        image:
          'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Brushless 750W, 48V (Bafang)' },
      { label: 'Pin', value: 'Lithium 48V-20Ah (LG Chem)' },
      { label: 'Tầm xa', value: '80-100km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '35 km/h' },
      { label: 'Thời gian sạc', value: '6-7 giờ' },
      { label: 'Phanh', value: 'Phanh đĩa thủy lực Shimano' },
      { label: 'Khung xe', value: 'Hợp kim nhôm 6061' },
      { label: 'Giảm sóc', value: 'Thủy lực trước/sau 80mm' },
      { label: 'Kích thước bánh xe', value: '27.5 inch' },
      { label: 'Trọng lượng xe', value: '28 kg' },
      { label: 'Tải trọng tối đa', value: '150 kg' },
      { label: 'Bảo hành', value: '24 tháng (Pin 18 tháng)' },
    ],
  },
  {
    name: 'Xe Đạp Điện Gấp Gọn',
    slug: 'xe-dap-dien-gap-gon',
    tagline: 'Gọn Nhẹ, Dễ Dàng Mang Theo',
    shortDesc: 'Di chuyển tiện lợi, dễ dàng gấp gọn mang theo',
    description: 'Dòng xe gấp gọn nhẹ, phù hợp đi tàu, bus, văn phòng',
    image:
      'https://images.unsplash.com/photo-1688881234567-abcdef123456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: [
      'Nhẹ 18kg',
      'Gấp gọn trong 10 giây',
      'Pin 36V-10Ah',
      'Giá từ 7-10 triệu',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1688881234567-abcdef123456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1688881234567-abcdef123456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1688881234578-abcdef654321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'Thiết Kế Gấp Gọn',
        content:
          'Khung nhôm nhẹ, có thể gấp gọn chỉ trong 10 giây, dễ dàng mang lên xe bus, tàu điện hoặc để văn phòng.',
        image:
          'https://images.unsplash.com/photo-1688881234567-abcdef123456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Pin & Hiệu Suất',
        content:
          'Pin 36V-10Ah, quãng đường 35-50km/lần sạc. Tốc độ tối đa 25km/h, trợ lực PAS 3 chế độ.',
        image:
          'https://images.unsplash.com/photo-1688881234578-abcdef654321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Tiện Nghi & An Toàn',
        content:
          'Phanh đĩa trước/sau, đèn LED, còi điện, yên êm, tay lái chống trượt.',
        image:
          'https://images.unsplash.com/photo-1688881234567-abcdef123456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Brushless 250W, 36V' },
      { label: 'Pin', value: 'Lithium 36V-10Ah' },
      { label: 'Tầm xa', value: '35-50km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '25 km/h' },
      { label: 'Thời gian sạc', value: '3-4 giờ' },
      { label: 'Phanh', value: 'Phanh đĩa cơ học' },
      { label: 'Khung xe', value: 'Hợp kim nhôm' },
      { label: 'Trọng lượng xe', value: '18 kg' },
      { label: 'Tải trọng tối đa', value: '100 kg' },
      { label: 'Bảo hành', value: '12 tháng' },
    ],
  },
  {
    name: 'Xe Đạp Điện Thể Thao',
    tagline: 'Thiết Kế Năng Động, Hiệu Suất Cao',
    slug: 'xe-dap-dien-the-thao',
    shortDesc: 'Xe điện mạnh mẽ cho người thích tốc độ và thể thao',
    description:
      'Động cơ mạnh mẽ, thiết kế khí động học, hướng đến trải nghiệm thể thao',
    image:
      'https://images.unsplash.com/photo-1688991234567-abcdef987654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: [
      'Động cơ 500W',
      'Pin 48V-15Ah',
      'Khung thể thao',
      'Giá từ 12-18 triệu',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1688991234567-abcdef987654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1688991234567-abcdef987654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'Động Cơ & Hiệu Suất',
        content:
          'Động cơ brushless 500W mạnh mẽ, tốc độ tối đa 30 km/h, PAS 3 cấp độ, leo dốc 20 độ.',
        image:
          'https://images.unsplash.com/photo-1688991234567-abcdef987654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Pin & Khung Xe',
        content:
          'Pin 48V-15Ah, di chuyển 60-80km/lần sạc. Khung nhôm thể thao, nhẹ nhưng chắc chắn.',
        image:
          'https://images.unsplash.com/photo-1688991234567-abcdef987654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Brushless 500W, 48V' },
      { label: 'Pin', value: 'Lithium 48V-15Ah' },
      { label: 'Tầm xa', value: '60-80km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '30 km/h' },
      { label: 'Thời gian sạc', value: '4-5 giờ' },
      { label: 'Phanh', value: 'Phanh đĩa cơ học' },
      { label: 'Khung xe', value: 'Hợp kim nhôm' },
      { label: 'Trọng lượng xe', value: '22 kg' },
      { label: 'Tải trọng tối đa', value: '120 kg' },
      { label: 'Bảo hành', value: '18 tháng' },
    ],
  },
  {
    name: 'Xe Đạp Điện Mini',
    tagline: 'Sang Trọng, Đẳng Cấp & Thông Minh',
    slug: 'xe-dap-dien-mini',
    shortDesc: 'Nhỏ gọn, linh hoạt, dễ dàng di chuyển trong phố',
    description: 'Xe điện mini, phù hợp học sinh, sinh viên, người đi làm',
    image:
      'https://images.unsplash.com/photo-1688999876543-abcdef123abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Nhẹ 15kg', 'Pin 24V-8Ah', 'Tốc độ 20 km/h', 'Giá từ 5-8 triệu'],
    heroImage:
      'https://images.unsplash.com/photo-1688999876543-abcdef123abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1688999876543-abcdef123abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'Thiết Kế Mini',
        content:
          'Nhỏ gọn, dễ mang lên xe bus, tàu, hoặc cất giữ trong nhà, văn phòng.',
        image:
          'https://images.unsplash.com/photo-1688999876543-abcdef123abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Pin & Hiệu Suất',
        content:
          'Pin 24V-8Ah, quãng đường 20-30 km/lần sạc, tốc độ tối đa 20 km/h.',
        image:
          'https://images.unsplash.com/photo-1688999876543-abcdef123abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Bosch Performance CX 750W' },
      { label: 'Pin', value: 'Lithium 48V-25Ah (LG)' },
      { label: 'Tầm xa', value: '120-150km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '45 km/h' },
      { label: 'Thời gian sạc', value: '4-5 giờ (Sạc nhanh)' },
      { label: 'Phanh', value: 'ABS + Phanh đĩa thủy lực' },
      { label: 'Khung xe', value: 'Titanium Grade 9' },
      { label: 'Màn hình', value: 'TFT 5 inch cảm ứng' },
      { label: 'Kết nối', value: '4G/5G, GPS, Bluetooth 5.0' },
      { label: 'Trọng lượng xe', value: '22 kg' },
      { label: 'Tải trọng tối đa', value: '130 kg' },
      { label: 'Bảo hành', value: '60 tháng (Pin 24 tháng)' },
    ],
  },
  {
    name: 'Xe Đạp Điện Trẻ Em',
    tagline: 'An Toàn & Vui Vẻ Cho Bé Yêu',
    slug: 'xe-dap-dien-mini',
    shortDesc: 'An toàn và vui vẻ cho bé yêu',
    description: 'Thiết kế đặc biệt cho trẻ em từ 6-14 tuổi',
    image:
      'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: [
      'Giới hạn tốc độ',
      'Khung thấp an toàn',
      'Màu sắc đa dạng',
      'Giá từ 5-8 triệu',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    galleryImages: [
      'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    sections: [
      {
        title: 'An Toàn Tối Đa',
        content:
          'Giới hạn tốc độ tối đa 15km/h phù hợp với trẻ em. Khung xe thấp chỉ 30cm từ mặt đất giúp bé dễ dàng đặt chân xuống. Phanh tay nhỏ gọn, nhạy phù hợp với bàn tay trẻ em. Bánh xe phụ tháo rời cho bé mới tập.',
        image:
          'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Thiết Kế Vui Tươi',
        content:
          'Nhiều màu sắc rực rỡ: hồng, xanh dương, xanh lá, vàng. Họa tiết hoạt hình đáng yêu. Giỏ đựng đồ phía trước hình thú cưng. Còi xe có âm thanh vui nhộn. Đèn LED nhiều màu sắc.',
        image:
          'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        title: 'Phù Hợp Phát Triển',
        content:
          'Yên xe và tay lái điều chỉnh chiều cao linh hoạt, phù hợp với trẻ từ 6-14 tuổi. Pin nhỏ gọn 24V-8Ah đủ cho bé đi chơi 25-35km. Trọng lượng nhẹ chỉ 15kg, bé có thể tự đẩy xe khi hết pin.',
        image:
          'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ],
    specifications: [
      { label: 'Động cơ', value: 'Brushless 150W, 24V' },
      { label: 'Pin', value: 'Lithium 24V-8Ah' },
      { label: 'Tầm xa', value: '25-35km/lần sạc' },
      { label: 'Tốc độ tối đa', value: '15 km/h (giới hạn)' },
      { label: 'Thời gian sạc', value: '2-3 giờ' },
      { label: 'Phanh', value: 'Phanh V-brake' },
      { label: 'Khung xe', value: 'Thép carbon cao cấp' },
      { label: 'Kích thước bánh xe', value: '16 inch' },
      { label: 'Trọng lượng xe', value: '15 kg' },
      { label: 'Độ tuổi phù hợp', value: '6-14 tuổi' },
      { label: 'Tải trọng tối đa', value: '60 kg' },
      { label: 'Bảo hành', value: '24 tháng (Pin 12 tháng)' },
    ],
  },
];

export const initialBikeSeries = [
  {
    name: 'City Bike',
    description: 'Xe đạp điện dành cho di chuyển trong thành phố',
  },
  {
    name: 'Mountain Bike',
    description: 'Xe đạp điện địa hình',
  },
  {
    name: 'Folding Bike',
    description: 'Xe đạp điện gấp gọn',
  },
  {
    name: 'Sport Bike',
    description: 'Xe đạp điện thể thao',
  },
  {
    name: 'Cargo Bike',
    description: 'Xe đạp điện chở hàng',
  },
  {
    name: 'Kids Bike',
    description: 'Xe đạp điện trẻ em',
  },
];

const prisma = new PrismaClient();

async function main() {
  // for (const p of productLines) {
  //   await prisma.product.create({
  //     data: {
  //       name: p.name,
  //       shortDesc: p.shortDesc,
  //       tagline: p.tagline,
  //       heroImage: p.heroImage,
  //       image: p.image,
  //       description: p.description,
  //       features: p.features,
  //       galleryImages: p.galleryImages,
  //       sections: p.sections,
  //       specifications: p.specifications,
  //     },
  //   });
  // }

  for (const s of initialBikeSeries) {
    await prisma.series.create({
      data: {
        name: s.name,
        description: s.description,
      },
    });
  }

  console.log('✅ All products imported successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
