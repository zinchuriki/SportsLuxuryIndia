import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeItem, getWhatsAppOrderUrl } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);

  const handleOrder = () => {
    const url = getWhatsAppOrderUrl();
    if (url) {
      window.open(url, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-secondary">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-ember text-ember-foreground border-0">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-card border-border">
        <SheetHeader className="flex-shrink-0 border-b border-border pb-4">
          <SheetTitle className="text-display text-2xl tracking-wider uppercase">Your Bag</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            {totalItems === 0 ? "Empty — go pick something" : `${totalItems} item${totalItems !== 1 ? "s" : ""}`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your bag is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-4 p-3 border border-border rounded-md bg-secondary/30">
                      <div className="w-20 h-20 bg-background rounded overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display uppercase tracking-wide text-sm truncate">{item.product.node.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.selectedOptions.map((o) => o.value).join(" • ")}
                        </p>
                        <p className="font-semibold mt-2 text-gold">
                          {item.price.currencyCode} {parseFloat(item.price.amount).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between flex-shrink-0">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.variantId)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 space-y-4 pt-4 border-t border-border bg-card">
                <div className="flex justify-between items-center">
                  <span className="text-display text-xl uppercase tracking-wider">Total</span>
                  <span className="text-2xl font-bold text-gold">
                    {items[0]?.price.currencyCode || "INR"} {totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={handleOrder}
                  size="lg"
                  disabled={items.length === 0}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-display tracking-widest uppercase text-base"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />Place Order on WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your order will be sent via WhatsApp for confirmation & payment.
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
