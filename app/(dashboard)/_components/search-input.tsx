"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebounce } from "usehooks-ts";
import { useState, ChangeEvent, useEffect, ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedQuery,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedQuery, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 trasnform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9 "
        placeholder="Search boards"
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};

export { SearchInput };
