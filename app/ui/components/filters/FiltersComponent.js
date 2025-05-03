'use client';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

function FiltersComponent() {
    const filters = ['PRICE', 'SIZE', 'COLOR', 'SALE', 'FITS', 'SORT'];
    const [expandedFilter, setExpandedFilter] = useState(null);

    const toggleFilter = (filter) => {
        setExpandedFilter(prev => (prev === filter ? null : filter));
    };

    const renderFilterContent = (filter) => {
        switch (filter) {
            case 'PRICE':
                return <PriceFilter />;
            case 'SIZE':
                return <SizeFilter />;
            case 'COLOR':
                return <ColorFilter />;
            case 'SALE':
                return <SaleFilter />;

            case 'FITS':
                return <FitsFillter />;
            default:
                return null;
        }
    };


    return (
        <div className="w-full">
            <div className="flex flex-col items-start w-full">
                {filters.map((filter) => (
                    <div key={filter} className="w-full">
                        {/* Header Row */}
                        <div
                            className={`py-3 ${expandedFilter !== filter ? "border-b" : ""}  text-sm font-semibold text-gray-800 cursor-pointer w-full flex flex-row items-center justify-between px-4`}
                            onClick={() => toggleFilter(filter)}
                        >
                            <div>{filter}</div>
                            {expandedFilter === filter ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                        {/* Collapsible Content */}
                        {expandedFilter === filter && (
                            <div className="px-4 py-4 border-b">
                                {renderFilterContent(filter)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FiltersComponent;

function PriceFilter() {
    return (
        <div className="flex gap-2 items-center">
            <span className="text-[10px] text-gray-700">Rs</span>
            <input
                type="number"
                placeholder="From"
                className="w-[9vw] border border-gray-400 px-4 py-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <input
                type="number"
                placeholder="To"
                className="w-[9vw] border border-gray-400 px-4 py-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />

        </div>
    );
}

function SizeFilter() {
    const sizes = ['5-6 Y', '7-8 Y', '9-10 Y', '11-12 Y', '13-14 Y'];
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleCheckboxChange = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    return (
        <div className="flex flex-col gap-2">
            {sizes.map((size) => (
                <label key={size} className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleCheckboxChange(size)}
                        className="appearance-none w-5 h-5 border border-black checked:bg-white checked:border-black checked:after:content-['✓'] checked:after:text-black checked:after:text-sm checked:after:font-semibold checked:after:flex checked:after:items-center checked:after:justify-center"
                    />
                    <span className={`text-sm hover:underline `}>{size}</span>
                </label>

            ))}
        </div>
    );
}

function SaleFilter() {
    const sizes = ['30%', '50%'];
    const [selectedSale, setSelectedSale] = useState([]);

    const handleCheckboxChange = (size) => {
        setSelectedSale(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    return (
        <div className="flex flex-col gap-2">
            {sizes.map((size) => (
                <label key={size} className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={selectedSale.includes(size)}
                        onChange={() => handleCheckboxChange(size)}
                        className="appearance-none w-5 h-5 border border-black checked:bg-white checked:border-black checked:after:content-['✓'] checked:after:text-black checked:after:text-sm checked:after:font-semibold checked:after:flex checked:after:items-center checked:after:justify-center"
                    />
                    <span className={`text-sm hover:underline `}>{size}</span>
                </label>

            ))}
        </div>
    );
}

function ColorFilter() {
    const colors = ['Aqua Blue', 'Beige', 'Beige', 'Black', 'Blue', 'Brown'];
    const [selectedColor, setselectedColor] = useState([]);

    const handleCheckboxChange = (size) => {
        setselectedColor(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    return (
        <div className="flex flex-col gap-2">
            {colors.map((size) => (
                <label key={size} className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={selectedColor.includes(size)}
                        onChange={() => handleCheckboxChange(size)}
                        className="appearance-none w-5 h-5 border border-black checked:bg-white checked:border-black checked:after:content-['✓'] checked:after:text-black checked:after:text-sm checked:after:font-semibold checked:after:flex checked:after:items-center checked:after:justify-center"
                    />
                    <span className={`text-sm hover:underline `}>{size}</span>
                </label>

            ))}
        </div>
    );
}

function FitsFillter() {
    const fits = ['Flare Fit', 'Regular Fit', 'Skinny Fit', 'Wide Leg'];
    const [selectedFit, setselectedFit] = useState([]);

    const handleCheckboxChange = (size) => {
        setselectedFit(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    return (
        <div className="flex flex-col gap-2">
            {fits.map((size) => (
                <label key={size} className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={selectedFit.includes(size)}
                        onChange={() => handleCheckboxChange(size)}
                        className="appearance-none w-5 h-5 border border-black checked:bg-white checked:border-black checked:after:content-['✓'] checked:after:text-black checked:after:text-sm checked:after:font-semibold checked:after:flex checked:after:items-center checked:after:justify-center"
                    />
                    <span className={`text-sm hover:underline `}>{size}</span>
                </label>

            ))}
        </div>
    );
}
