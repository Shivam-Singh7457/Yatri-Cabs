'use client';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setTripType, updateField } from '../store/bookingSlice';
import styles from './BookingCard.module.css';

export default function BookingCard() {
  const { category, tripType, from, to, pickupDate, returnDate, pickupTime } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const [fromOptions, setFromOptions] = useState([]);
  const [toOptions, setToOptions] = useState([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  
  const timeoutRef = useRef(null);

  const fetchCities = async (query, setOptionsFunc, setShowFunc) => {
    if (!query || query.length < 2) {
      setOptionsFunc([]);
      setShowFunc(false);
      return;
    }
    
    // Clear previous timeout for debounce
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=in&limit=5&featuretype=city`);
        const data = await res.json();
        const cities = data.map(item => item.display_name.split(',')[0]);
        // Filter uniqueness
        const uniqueCities = [...new Set(cities)];
        setOptionsFunc(uniqueCities);
        setShowFunc(true);
      } catch (err) {
        console.error("Failed to fetch cities", err);
      }
    }, 400);
  };

  const handleFromChange = (e) => {
    const val = e.target.value;
    dispatch(updateField({ field: 'from', value: val }));
    fetchCities(val, setFromOptions, setShowFromDropdown);
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    dispatch(updateField({ field: 'to', value: val }));
    fetchCities(val, setToOptions, setShowToDropdown);
  };

  const selectFrom = (city) => {
    dispatch(updateField({ field: 'from', value: city }));
    setShowFromDropdown(false);
  };

  const selectTo = (city) => {
    dispatch(updateField({ field: 'to', value: city }));
    setShowToDropdown(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.tabsRow}>
        {['Outstation', 'Local', 'Airport'].map((t) => (
          <button key={t} 
            className={category === t ? styles.activeTab : styles.inactiveTab}
            onClick={() => dispatch(setCategory(t))}>{t}</button>
        ))}
      </div>
      
      <div className={styles.formContent}>
        <div className={styles.tripTypeToggles}>
          <label className={styles.radioLabel}>
            <input 
              type="radio" 
              name="trip" 
              checked={tripType === 'One Way'}
              onChange={() => dispatch(setTripType('One Way'))}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom}></span>
            <span className={tripType === 'One Way' ? styles.radioTextActive : styles.radioText}>One Way</span>
          </label>
          <label className={styles.radioLabel}>
            <input 
              type="radio" 
              name="trip" 
              checked={tripType === 'Round Trip'}
              onChange={() => dispatch(setTripType('Round Trip'))}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom}></span>
            <span className={tripType === 'Round Trip' ? styles.radioTextActive : styles.radioText}>Round Trip</span>
          </label>
        </div>

        <div className={styles.inputGrid}>
          <div className={styles.inputGroupContainer}>
            <div className={styles.inputGroup}>
              <label>FROM</label>
              <input 
                type="text" 
                placeholder="Type City" 
                value={from} 
                onChange={handleFromChange} 
                onFocus={() => fromOptions.length > 0 && setShowFromDropdown(true)}
                onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
              />
              {showFromDropdown && fromOptions.length > 0 && (
                <ul className={styles.dropdown}>
                  {fromOptions.map((city, i) => (
                    <li key={i} onMouseDown={() => selectFrom(city)}>{city}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.inputGroupContainer}>
            <div className={styles.inputGroup}>
              <label>TO</label>
              <input 
                type="text" 
                placeholder="Type City " 
                value={to} 
                onChange={handleToChange} 
                onFocus={() => toOptions.length > 0 && setShowToDropdown(true)}
                onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
              />
              {showToDropdown && toOptions.length > 0 && (
                <ul className={styles.dropdown}>
                  {toOptions.map((city, i) => (
                    <li key={i} onMouseDown={() => selectTo(city)}>{city}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={styles.inputGrid}>
          <div className={styles.inputGroupContainer}>
            <div className={styles.inputGroup}>
              <label>Pickup Date</label>
              <input 
                type="date" 
                value={pickupDate} 
                onChange={(e) => dispatch(updateField({ field: 'pickupDate', value: e.target.value }))}
              />
            </div>
          </div>
          <div className={styles.inputGroupContainer}>
            <div className={styles.inputGroup}>
              <label>Return Date</label>
              <input 
                type="date" 
                value={returnDate} 
                onChange={(e) => dispatch(updateField({ field: 'returnDate', value: e.target.value }))}
                disabled={tripType === 'One Way'}
                style={{ opacity: tripType === 'One Way' ? 0.5 : 1 }}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputGridSingle}>
          <div className={styles.inputGroupContainer}>
            <div className={styles.inputGroup}>
              <label>Pickup Time</label>
              <input 
                type="time" 
                value={pickupTime} 
                onChange={(e) => dispatch(updateField({ field: 'pickupTime', value: e.target.value }))} 
              />
            </div>
          </div>
        </div>

        <div className={styles.actionRow}>
          <button className={styles.exploreBtn}>EXPLORE CABS</button>
        </div>
      </div>
    </div>
  );
}