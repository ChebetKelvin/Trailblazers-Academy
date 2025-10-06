import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480264283_606063365513566_6157378848496459807_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAkWmaqWbJ3sLiCNYoyXgSk54M6e_I-SmTngzp78j5KcVvijXENXJ3o-OYJPwy0_rxNU_oPFkV7J3mraGAvl_e&_nc_ohc=1zUFohrKQbAQ7kNvwGTIrGm&_nc_oc=AdmnwF0jsTQM7d39nm_pSF9uoO-n9dcYfmETZ45St5QThQSYOk2BjrvKZJndJvZHk-0&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=A_J1ZF6NAlYnBE4ZU5fPrg&oh=00_AfaZG_k_9SN9ZVsDYT5DJ1hHC_eLMV9AscGTRV1dyivoZQ&oe=68DFF36D",
    "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/508325816_695949323191636_4547751906918555349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCcT6rtkhTWXmDUXT5HivKCfA-GHbsc6UJ8D4YduxzpXZOIBFs56EVsRQDSSm31pJgE_X32-SYpbeW8_haXelP&_nc_ohc=pE0_gacXGn0Q7kNvwFHXBz7&_nc_oc=AdmFb0M42WC3LSg2jsL7qsTju2sQjozcNCwB6764-ZKZGeKpTmz8NoTf6C7Y7mB6zfU&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=bCqBrz65w3jOQnz6xNB6dQ&oh=00_AfbUX7siEMAFlNRqlj42dHezwhN_7SAAS5y-KvJF9Ao9WQ&oe=68DE150F",
    "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/481911359_620042447448991_7872115291152688742_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCCygPx5atbuWnrgs_AVIm_WM5uwQ7pSX9Yzm7BDulJdO9nFRGRTv-t9tY0cmb8BBmmw1f4vgGNx00FyIrKocr&_nc_ohc=6g6ElHFoG-kQ7kNvwGDTVA8&_nc_oc=AdmvoOjbfgSHNlhZYrzRkn7H3b-fmR9KbZ2U3HHlvjmZdkc9HL_48DaGP5CC7kr4e1U&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=n4MKHO-Lb0pKW2Ojr1wjSg&oh=00_AfZCXXdhAgomyFMWgJ1Ob6LlVIZqjIoIrGmoDNacUhJ9Ww&oe=68DDFE00",
    "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480709773_610545505065352_6715117016371879976_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFwSmcohC1Lt2QO1y2-LwjAlFH_J73udd-UUf8nve5131FnU8BQREcN6fMCEKLDjSEO8j8WHpXO288_qDRxt0BL&_nc_ohc=9mqT_RjquzwQ7kNvwEOH_-z&_nc_oc=AdmeoYeg1oqhTeZVs1prHHey0zJxNb1LyWmyq2wrOZaeFo_1gIOquZNztP3B1hkQJLQ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=aJlUMqt6RkebzhMXYt07-A&oh=00_AfYajTo9zGxbh0d3Pepgl4jKoRxh-u3sZ59SB8MmXy09ow&oe=68DDF959",
    "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/480781963_609141358539100_6806516894090802586_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQma2s3-5Ou95QBD7R_D0F2ov3d0c5kRzai_d3RzmRHO6Lilhy0ampBOCWiY_HIIM0bz8l7n3_POpkdQSRrM7s&_nc_ohc=y-Lnxndfvb0Q7kNvwFauQAu&_nc_oc=AdmROr0f-W8wlvhPJpELYPKK21Cy3t5szxa2iu-JSRvuDO-VQn2puhSZWhLsDaIHQgA&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=0rKuhsTxuwvg-dVB10SJ1g&oh=00_AfZvDGG8LxOQNOFkpS8_3DzIQ96fVl79sww_3l4SuJ0tlw&oe=68DE24AE",
    "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480562651_609141215205781_5244049058840273239_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG0ZC6lTMRrXFT9QFeRxShy6Fqrj2YypY_oWquPZjKlj0qKdO_aFyoN_Ua3TiNxLopUr5ZOUIs5RtKSin54XgKX&_nc_ohc=R9nhH7yRjUcQ7kNvwFpTYhX&_nc_oc=AdkJD42KDy4vZ7s3Mt_AJij271VNq-m8bDsObjkF0Psc_wCbyR5rBRU_lGj7gfvrzUk&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=MoSvf1dsnHpdfITMh7fimA&oh=00_AfZUGYAZ-I566DKjy3pZDNKxN-RGJlGfQuFtydrB1PvHMw&oe=68DE1464",
    "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/475972095_599968046123098_4932839093179184207_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFcmNq5uqb9uxeexWUWm6kIM7orP8sC7Sozuis_ywLtKiPbN716Ew2YkxaAb85yWxe4XRjzQUCEypHY0XCbr_Z1&_nc_ohc=8q4t3wm_xUUQ7kNvwFfKISs&_nc_oc=AdnkcuCVxU7eFdo9ekMYIklLUD4pDNgXDPMdvMjFD_XJHCvp8R3Dz6nnRpnA1wKWQ9I&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=8tSZ3MwzOod1KTgn-sZ2KA&oh=00_AfblVDssA9n2d4mHiOALTGXyHmQP6YJIAeaG0BtoKcve7g&oe=68DE0879",
    "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/480552901_610625238390712_1085316004062795941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFPRe3B3wod51xCon_ACU7-G0e0CrYQjkEbR7QKthCOQbH9Pr_MJxO__OG409r9GvfsMrXdD-ARqr3VuFBxq6NL&_nc_ohc=1D30CkjTXMAQ7kNvwGpf4ny&_nc_oc=Adnnqm5iJt_VgO_nBV1RkywuTbj4LB4rXl5R3oZxOpSTynuUlSNPEHu1ur_xY1E9nc0&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=XHGd3VkCh7vbOzNljxXiTg&oh=00_AfZKnb7G37UMK-AiEfV0BFR_SGs2qOcQKbGCGKG3x5OJcQ&oe=68DE07FB",
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-[url('https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/480348894_608457815274121_4537684634856871130_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMYnNDEFoX011V7lQPXTA9J31HHIyi3-QnfUccjKLf5BUxyJevzPWjXfRCUQF3ZixyQl1qrY9vd2mh7scLX1Zm&_nc_ohc=UO54amVKuMoQ7kNvwF5kx_2&_nc_oc=Adlvj9WS5LpfQD0OqL5oj3yYCmxS4o_F493makzmN0WlGgWjUKuqzr-L1q_MBoppHSI&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=2tWXKDUoIrhjtZtw-JT4nA&oh=00_Afb7kbiRyk_hsHpS9owufBuOa7D7oJDfP3OzN53LqWOJNg&oe=68DDFE7E')] bg-cover bg-center text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            School Gallery
          </h1>
          <p className="mt-4 text-lg opacity-90">
            A glimpse into the joyful moments at Meru Trailblazers Academy
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#f9fbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0097d7] mb-12">
            Moments We Cherish
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                  View Photo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-xl shadow-lg object-contain max-h-[80vh] w-auto"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
