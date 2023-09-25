import { useState } from "react"
import { TypeDropDown } from "../model/interfaces"

export const useDropDown = () => {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)


  const dropDownToggle = (type: TypeDropDown) => {
    if (type === "category") {
      setIsCategoryDropdownOpen((state) => !state)
      setIsSortDropdownOpen(false)
      setIsYearDropdownOpen(false)
      return
    }
    if (type === "Sort") {
      setIsSortDropdownOpen((state) => !state)
      setIsCategoryDropdownOpen(false)
      setIsYearDropdownOpen(false)
    }
    if (type === "year") {
      setIsYearDropdownOpen((state) => !state)
      setIsSortDropdownOpen(false)
      setIsCategoryDropdownOpen(false)
    }
  }

  return {
    // Properties
    isYearDropdownOpen,
    isCategoryDropdownOpen,
    isSortDropdownOpen,

    // Methods
    setIsYearDropdownOpen,
    setIsCategoryDropdownOpen,
    setIsSortDropdownOpen,

    dropDownToggle
  }
}
