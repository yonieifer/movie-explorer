function SearchBar({
    search,
    onSearch,
}: {
    search: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            type="text"
            onChange={onSearch}
            value={search}
            placeholder="🔎Search Movies..."
        />
    );
}

export default SearchBar;
