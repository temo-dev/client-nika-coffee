"use client"
import ShopComponent from '@/components/ShopComponent'
import React, { useEffect, useState } from 'react'
import { data } from "@/data"
const menu = () => {
  const [dataItem, setDataItem] = useState(null)
  useEffect(() => {
    setDataItem(data)
  }, [])

  return (
    <ShopComponent data={dataItem} />
  )
}

export default menu