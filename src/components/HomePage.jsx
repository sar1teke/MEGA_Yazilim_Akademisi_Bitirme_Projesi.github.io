import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

Modal.setAppElement('#root');
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState('');
  const [selectedImageDescription, setSelectedImageDescription] = useState('');
  
  const openModal = (title, description) => {
    setModalIsOpen(true);
    setSelectedImageTitle(title);
    setSelectedImageDescription(description);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMainImage(null);
    setSelectedImageTitle('');
    setSelectedImageDescription('');
  };
  const handleMainImageClick = (mainImage, title, description) => {
    setSelectedMainImage(mainImage);
    openModal(title, description);
  };
  const images = [
    {
      id: 1,
      title: '4 Adet Tescilli Taşınmazın Rekonstrüksiyon Yapım İşi',
      description: 'Şükran Mahallesi 2 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı'nın Yapımı.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/01-1.jpg',
    },
    {
      id: 2,
      title: '6 Adet Açık Halı Saha Yapılması',
      description: 'Alpaslan, Çarıklar, Kavak, Hatunsaray, Yeşiltekke ve Aşkan Mahallesine Açık Halı Saha Yapılması.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/001_1.jpg',
    },
    {
      id: 3,
      title: 'Bizim Meram Köyü Konut Yapı Kooperatifi',
      description: 'Meram da Farklı bir konseptte konut hamlesi devam ediyor… Şehir trafiğinin gürültüsü ve kalabalığından uzaklaşmak, stres ve yorgunluğunu atmak için doğa ile iç içe olan dağ evleri projemizi sizlerle buluşturuyoruz. Proje alanımız, Konya Antalya yolu 30. Kilometrede, Sefaköy sapağında bulunmaktadır. Proje, 400 bin metrekarelik alan içerisinde 230 bin metrekarelik arsa alanında 500 ile 700 metrekare müstakil parsellerde konumlanacaktır. Projede 407 adet dağ evi, her parsel için 1 adet açık otopark alanı, meyve ağaçları ve tarım yapılabilecek alanlar planlanmıştır. Hem yaz hem de kış aylarında konaklamanın sağlanabileceği tek tip 407 adet dağ evi, imar mevzuatına uygun şekilde yapılaşacaktır. Her parselin kendi tapusu bulunacak ve parseller konum ve büyüklüklerine göre şerefiyelendirilecektir.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/b3004298-c883-44a4-bb95-f159b1ca94c7.jpg',
    },
    {
      id: 4,
      title: 'Berlika Trafik Eğitim Parkı',
      description: '2014 yılında yapımı tamamlanan Berlika Parkı içerisinde bulunan eğlence alanı revize edilmiştir. Bu revize sonucunda 3500 m²’ lik alan çocuklara yönelik trafik eğitim parkı olarak tasarlanmış olup halkımızın hizmetine sunulmuştur. Revizyon Kapsamında; Basketbol ve voleybol saha tellerinin yenileme ve bakımı, 1930 m² koşu yolunun bakımı, Kafeterya binasının restorasyonu, 1111 m² asfalt serimi yapılmıştır. Peyzaj çalışması olarak 45 adet ağaç, 160 adet gül ve 10.146 adet çalı türü dikilmiş ve trafik eğitim parkı içerisine 500 m² çim ekimi yapılmıştır.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/berlika3.jpg',
    },
    {
      id: 5,
      title: 'Tantavi Kültür ve Sanat Merkezi',
      description: 'İnşaat alanı;1422 m² Arsa alanı; 1046,96 m² Kat Adedi; B+Z+Asma Kat Tesiste, çok amaçlı salon ve kafeterya mevcuttur',
      mainImage: 'https://www.konhaber.com/sahifeler/upload/2019/10/13/1570959948.jpg',
    },
    {
      id: 6,
      title: 'Aksinne Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı',
      description: 'Meram Belediyesi öncülüğünde başlan Aksinne Evleri 846 dairelik dev bir projedir. Tamamı 3+1 olan konutlar, 147 m² ve 167 m² seçenekleri ile sunuluyor. Projede konutlar toplam 14 blok halinde olacak. Ticari alanlarımız ise 5 blok. Vatandaşlarımızın ihtiyaç duyduğu market gibi temel ihtiyaçlarını karşılayabileceği şekilde projelendirilmiştir.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/WhatsApp-Image-2021-12-28-at-16.15.15.jpeg',
    },
    {
      id: 7,
      title: 'Meram Yaka Sosyal Tesisi',
      description: 'Konya Büyükşehir Belediyemiz, Meram Belediyesi’yle birlikte Gençlik Merkezi, Emekli Lokali, Bilgehane, kapalı ve açık otopark alanları, yüzme havuzu ve spor tesisleriyle; sosyal tesis ve ticari alanlardan oluşan Meram Yaka Sosyal Tesisi adı verilen yeni bir merkez inşa etmektedir. Meram Yaka Sosyal Tesisi projemiz 2023 yılı sonuna kadar tamamlanması planlanmaktadır.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/14.jpg',
    },
    {
      id: 8,
      title: 'Şükran Mahallesi Kentsel Dönüşüm 2. Etap Ticaret Merkezi',
      description: 'Konya’nın merkez Meram İlçe Belediyesinin yatırımlarından biri olan Sahipata Mahallesi Şükran Kentsel Dönüşüm Projesi 2 milyar TL’yi aşan maliyetiyle Meram tarihinin en büyük Konya’nın da bugüne kadarki en önemli projelerinden biri oldu.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/1_89.jpg',
    },
    {
      id: 9,
      title: 'Yenice Parkı',
      description: 'YENİCE PARKI 10,336 TOPLAM İNŞAAT ALANI OLUP İÇERİSİNDE ; - KAFEMERAM - SÜS HAVUZLARI -YEŞİL ALANLAR -KAMERİYELER -ÇOCUK OYUN ALANLARI VE FİTNESS GRUPLARI -HIZ DÖNENCESİ -YÜRÜYÜŞ YOLLARI BULUNMAKTADIR',
      mainImage: 'https://www.meram.bel.tr/upload/medya/DJI_0002_1200.jpg',
    },
    {
      id: 10,
      title: 'Harmancık Pazar Yeri ve Sosyal Tesisi',
      description: 'Harmancık, Lalebahçe ve Karahüyük mahallelerimize hizmet verecek tesisimiz toplamda 4.844 m²’lik bir inşaat alanı vardır Yapımı gerçekleştirilen tesisin 3.116 m²’sini oluşturan kapalı pazar alanın da sebze ve tuhafiye olmak üzere 79 esnafımız 155 tezgah kurmaktadır. Pazar alanı dışında ise 1060 m²’den oluşan Meram Belediye Spor Klübümüz uhdesinde futsal, voleybol, basketbol, badminton, cimnastik, taekwando, judo, güreş, okçuluk, wushu, fitness vb. birçok farklı branşta hemşehrilerimizin spor yapabilecekleri 4 ayrı Spor Salonu yer almaktadır. Ayrıca tesiste 141 m² Emekliler Lokali ve 442 m²’den oluşan 5 bağımsız Ticari Alan bulunmaktadır.',
      mainImage: 'https://imgrosetta.mynet.com.tr/file/11766312/11766312-728xauto.jpg',
    },
    {
      id: 11,
      title: 'Akıllı Atık Yönetim Sistemi',
      description: 'Meram Belediyesi, dijitalleşen dünya ile birlikte hizmetlerine yenilikler getirmeye devam ediyor. Daha az iş gücü ve atıkların daha verimli şekilde toplanabilmesi adına Meram’daki çöp konteynerlerinde sensörler kullanılmaya başladı. Akıllı atık yönetim sistemi ile çöp konteynerlerindeki doluluk oranı uzaktan takip edilecekken oluşabilecek yangınların da önüne geçilecek. Mevlana Kalkınma Ajansı’nın destek verdiği proje, yaklaşık 1 Milyon TL’lik uygun bir bütçeyle faaliyete geçirilirken tasarrufa büyük ölçüde katkı sağlayacak.DOLULUK ORANLARINA GÖRE OTOMATİK ROTA OLUŞTURULUYOR.Meram Belediyesi Çevre Koruma ve Kontrol Müdürlüğü’nden yapılan açıklamada projeye dair bilgi verilirken, “Çöp konteynerlerine yerleştiren sensörler sayesinde akıllı sistem atık yönetiminde çöp konteynerlerinin doluluk oranları ve ısıları kontrol ediliyor. Yine takibini online olarak gerçekleştiriyoruz. Bu kapsamda doluluk oranlarına göre araçlarımıza otomatik rota oluşturarak konteynerlerin kapasitesi dolmadan boşaltım işlemini gerçekleştiriyoruz” denildi.YANGIN RİSKİNE KARŞI ISI UYARISI VERİYOR.Akıllı şehir atık yönetim sisteminin ekonomik ve zaman tasarrufuna büyük katkı sağladığına dikkat çekilen açıklamada, “Çöp konteynerine yerleştirilen sensörler doluluk oranının yanı sıra ısı ve sıcaklık artışı ile ilgili de bize bilgi veriyor. Daha önce çöp konteynerine atılan ateşli atıklar yangına ve maddi zarara sebep vermekteydi. Sensörler sayesinde ısı artışı olduğunda sistemimize uyarı bildirimi geliyor ve yangın tahlikesine karşı tedbir almamıza olanak sağlanıyor. Ayrıca bu sistem, çevre kirliliği, kötü görüntü ve çöp kokusu problemlerini de asgariye indirmektedir” şeklinde görüş belirtildi.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/1-4_124.jpg',
    },
    {
      id: 12,
      title: 'Meram Gödene Evleri Konut Yapı Kooperatifi',
      description: 'Meram Belediyesi’nin ilçe genelinde yürüttüğü Kentsel Dönüşüm çalışmaları kapsamında kurulmasına öncülük ettiği Meram Gödene Evleri Konut Yapı Kooperatifi Gödene Mahallesi sınırları içerisinde yer almaktadır. Hanedan Caddesi üzerinde inşa edilecek Meram Gödene Evleri, Hatıp Caddesi’ne yakın bir lokasyonda yer alırken toplamda 23 bin m² arsa alanına sahiptir. Tek parselde zemin + 5 kattan 12 blokta 276 daire olarak inşa edilecek ve 176 daire için üyelik alınacaktır. 6 bin m² sosyal yaşam alanı içerisinde yeşil alan, çocuk oyun alanları, spor alanları ve yürüyüş yolları ile site sakinlerine ferah ve konforlu bir yaşam sunacak olan projede her daire için 1 adet kapalı otopark yapılacaktır. Projede yer alacak yaklaşık 2089 m² ticari alanlar, site sakinlerinin yanı sıra yakın çevredeki mahallelilerin de ihtiyaçlarını karşılayacak ve bölgeye ayrıca değer katacak. Meram Gödene Evleri Konut Yapı Kooperatifi’nde tek tipte 2+1 daireler bulunacaktır.',
      mainImage: 'https://www.meram.bel.tr/upload/medya/2075a58d-1cbc-4a1c-bbe0-1f8bd01870de.jpg',
    },
    
  ];
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-5 pt-5">
        <h1>Merhaba, Proje Galeri Sayfamıza Hoşgeldiniz</h1>
      </div>
      <div className="container text-center mt-4">
        <h2>Meram Belediyesi Olarak Sizin İçin Gerçekleştirdiğimiz Projeler</h2>
        <SearchBar onSearch={setSearchTerm} className="mx-auto mb-4" />
        <div className="row">
          {images.map((mainImage) => (
            <div key={mainImage.id} className="col-md-4 mb-4 d-flex justify-content-center">
              <ImageCard
                image={mainImage.mainImage}
                title={mainImage.title}
                description={mainImage.description}
                onClick={() => handleMainImageClick(mainImage.mainImage, mainImage.title, mainImage.description)}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
      {selectedMainImage && (
        <div className="modal" style={{ display: modalIsOpen ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedImageTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedMainImage} alt={selectedImageDescription} className="img-fluid" />
                <p>{selectedImageDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;




