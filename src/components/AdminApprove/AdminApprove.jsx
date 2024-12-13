import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminApprove = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors
    const [approvalStatus, setApprovalStatus] = useState(''); // To track approval status
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the admin request data by ID
        axios.get(`http://localhost:5000/admin/request/${id}`)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load user data");
                setLoading(false);
            });
    }, [id]);

    const handleApprove = () => {
        axios.post(`http://localhost:5000/admin/approve/${id}`)
            .then(() => {
                setApprovalStatus('approved');
                alert("User approved and notified.");
                navigate('/admin/pending-requests'); // Redirect to pending requests or any other page
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to approve user.");
            });
    };

    const handleDeny = () => {
        axios.post(`http://localhost:5000/admin/deny/${id}`)
            .then(() => {
                setApprovalStatus('denied');
                alert("User denied and notified.");
                navigate('/admin/pending-requests'); // Redirect to pending requests or any other page
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to deny user.");
            });
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>; // Display error message if any

    return (
        <div>
            {user ? (
                <>
                    <h2>Review Admin Request</h2>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    {approvalStatus === 'approved' || approvalStatus === 'denied' ? (
                        <p>This request has already been {approvalStatus}.</p>
                    ) : (
                        <>
                            <button 
                                onClick={handleApprove} 
                                style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>
                                Approve
                            </button>
                            <button 
                                onClick={handleDeny} 
                                style={{ backgroundColor: 'red', color: 'white' }}>
                                Deny
                            </button>
                        </>
                    )}
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default AdminApprove;
