import React from 'react'

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist = [],
  onRemoveFromWishlist,
  onSelectDestination,
  onBook
}) {
  if (!isOpen) return null

  return (
    <div
      className="drawer-backdrop"
      onClick={(e) => {
        if (e.target.classList.contains('drawer-backdrop')) onClose()
      }}
    >
      <div className="side-drawer">
        <div className="drawer-header">
          <div className="drawer-title-box">
            <i className="fa-solid fa-heart" style={{ color: '#ef4444' }}></i>
            <h3>Saved Wishlist ({wishlist.length})</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="drawer-body">
          {wishlist.length === 0 ? (
            <div className="drawer-empty-state">
              <div className="drawer-empty-icon">
                <i className="fa-regular fa-heart"></i>
              </div>
              <h4>Your wishlist is empty</h4>
              <p>Explore top destinations, deals, and AI itineraries and tap the heart icon to save your favorites.</p>
            </div>
          ) : (
            <div className="drawer-items-list">
              {wishlist.map((item) => (
                <div key={item.id} className="wishlist-item-card">
                  <img src={item.image} alt={item.name || item.title} className="wishlist-thumb" />
                  <div className="wishlist-item-details">
                    <div className="wishlist-item-name">{item.name || item.title}</div>
                    <div className="wishlist-item-price">
                      {item.price ? `Starting from ${item.price}` : item.newPrice ? `₹${item.newPrice.toLocaleString('en-IN')}` : 'Custom AI Plan'}
                    </div>
                    <div className="wishlist-actions-row">
                      <button
                        className="btn-plan-sm"
                        onClick={() => {
                          onClose()
                          if (item.prompt) {
                            onSelectDestination(item.prompt)
                          } else if (onBook) {
                            onBook(item)
                          }
                        }}
                      >
                        Plan / Book &rarr;
                      </button>
                      <button
                        className="btn-remove-sm"
                        onClick={() => onRemoveFromWishlist(item.id)}
                        title="Remove from wishlist"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="drawer-footer">
            <button
              className="btn-book-now"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                onClose()
                if (wishlist[0]) {
                  if (wishlist[0].prompt) onSelectDestination(wishlist[0].prompt)
                  else if (onBook) onBook(wishlist[0])
                }
              }}
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i> Plan Trip with First Saved
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
