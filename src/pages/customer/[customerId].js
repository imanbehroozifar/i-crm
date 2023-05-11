import CustomerDetailPage from '@/Components/template/CustomerDetailPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Index = () => {
    const [data, setData] = useState(null)
    const router = useRouter();
    const {
        query: { customerId },
        isReady,
    } = router;
    useEffect(() => {
        if (isReady) {
            fetch(`/api/customer/${customerId}`)
                .then((res) => res.json())
                .then((data) => setData(data.data));
        }
    }, [isReady]);

    if (data) {
        return <CustomerDetailPage data={data} id={customerId} />;
    }
}

export default Index