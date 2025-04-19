import { Menu } from "lucide-react";

export default function MobileNav( { onOpen }: { onOpen: () => void }) {
    return (
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={onOpen}
          aria-label="Open sidebar"
        >
            <Menu className="w-6 h-6" />
        </button>
    )
}