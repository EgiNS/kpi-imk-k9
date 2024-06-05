const VideoGrid = () => {
  const mainVideoUrl = "https://www.youtube.com/embed/xL4PhvZgPPA?si=veVz_xoV-7N3gpM4";
  const sideVideoUrls = [
    "https://www.youtube.com/embed/BotzGwY8Uqw",
    "https://www.youtube.com/embed/7kwUCo4oVE4",
    "https://www.youtube.com/embed/8YvlWF2BM8s"
  ];

  return (
    <div className="mx-auto">
      <h2 className="md:text-3xl text-2xl font-bold mb-4 text-left text-[#611C1C]">Video KPI</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {/* Main Video */}
        <div className="col-span-2 mb-4 md:mb-0">
          <iframe 
            className="w-full h-full md:h-full rounded-xl"
            src={mainVideoUrl}
            title="Main Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Side Videos */}
        <div className="flex flex-col space-y-4">
          {sideVideoUrls.map((url, index) => (
            <iframe 
              key={index}
              className="w-full h-full md:h-1/3 rounded-xl"
              src={url}
              title={`Side Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
