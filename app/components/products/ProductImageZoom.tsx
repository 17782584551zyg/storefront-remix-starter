import { useState, useRef } from 'react';
import { getImageUrl } from '~/constants';

interface ProductImageZoomProps {
  featuredAsset: { preview: string } | null | undefined;
  assets: Array<{ id: string; preview: string }>;
  onAssetChange: (asset: { preview: string }) => void;
  backendUrl?: string;
}

export function ProductImageZoom({
  featuredAsset,
  assets,
  onAssetChange,
  backendUrl,
}: ProductImageZoomProps) {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const maskSize = 150;
    const maxX = 100 - (maskSize / rect.width) * 100;
    const maxY = 100 - (maskSize / rect.height) * 100;

    const maskX = Math.max(0, Math.min(maxX, x - (maskSize / rect.width) * 50));
    const maskY = Math.max(
      0,
      Math.min(maxY, y - (maskSize / rect.height) * 50),
    );

    setZoomPosition({ x, y });
    setMaskPosition({ x: maskX, y: maskY });
  };

  return (
    <div className="relative">
      <span className="rounded-md overflow-hidden block">
        <div
          ref={imageRef}
          className="w-full h-full object-center object-cover rounded-lg relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img
            src={getImageUrl(featuredAsset?.preview, { w: 1200, backendUrl })}
            alt="Product"
            className="w-full h-full object-center object-cover rounded-lg"
          />
          {showZoom && (
            <>
              <div
                className="absolute bg-white/30 border-2 border-white rounded-lg pointer-events-none z-10"
                style={{
                  width: '150px',
                  height: '150px',
                  left: `${maskPosition.x}%`,
                  top: `${maskPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div
                className="absolute right-0 top-0 w-[400px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg pointer-events-none z-20"
                style={{
                  backgroundImage: `url(${getImageUrl(featuredAsset?.preview, {
                    w: 1200,
                    backendUrl,
                  })})`,
                  backgroundSize: '200%',
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            </>
          )}
        </div>
      </span>
      {assets.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                featuredAsset?.preview === asset.preview
                  ? 'ring-2 ring-primary ring-offset-2'
                  : ''
              }`}
              onClick={() => onAssetChange(asset)}
            >
              <img
                draggable={false}
                className="w-20 h-20 object-cover"
                src={getImageUrl(asset.preview, { w: 150, h: 150, backendUrl })}
                alt="Thumbnail"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
