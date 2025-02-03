const ThumbnailGallery = () => (
    <div className="grid grid-cols-5 gap-3">
      {[1, 2, 3, 4, 5].map((_, idx) => (
        <button key={idx} className="aspect-square">
          <img
            src="/sofa 1.svg"
            alt={`Thumbnail ${idx + 1}`}
            className="w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
  
  export default ThumbnailGallery;
  